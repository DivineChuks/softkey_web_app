import React, { useEffect } from "react";
import { client } from "../../app/lib/sanity";

const SoftwareCategories = () => {
  const [SoftwareCategories, setSoftwareCategories] = useState(null);
  const categoryName = "software";

  useEffect(() => {
    const query = `
      *[_type == "product" && category->name == "${categoryName}"] {
        _id,
        name,
        "imageUrl": images[0].asset->url,
        description,
        slug,
        price,
        category->{
          name
        }
      }
    `;
    client
      .fetch(query)
      .then((data) => {
        setSoftwareCategories(data);
      })
      .catch(console.error);
  }, [categoryName]);

  return (
    <div className="bg-gray-900 text-white w-full h-max flex gap-2 flex-wrap">
      {SoftwareCategories?.map((item) => (
        <Link href={`product-details/${item?._id}`}>{item?.name}</Link>
      ))}
    </div>
  );
};

export default SoftwareCategories;
