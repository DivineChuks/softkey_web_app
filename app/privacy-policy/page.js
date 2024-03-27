import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      <p className="mb-4">Effective date: 9th February, 2024</p>

      <p className="mb-4">
        Fecund Integrated Limited ("us", "we", or "our") operates the
        www.cdkeyzone.com website (the "Service").
      </p>

      <p className="mb-4">
        We value the privacy of our customers and are committed to protecting
        your personal information. This Privacy Policy outlines how we collect,
        use, and safeguard your data when you use our Service.
      </p>

      <h2 className="font-bold text-xl mb-2">Information Collection and Use</h2>
      <p className="mb-4">
        We collect various types of information to provide and improve our
        Service to you.
      </p>

      <h3 className="font-bold text-lg mb-2">Personal Information</h3>
      <p className="mb-4">
        We may ask you to provide certain personal information that can be used
        to identify or contact you, such as your email address, name, and
        address. This information is used to process your order and for
        communication purposes regarding our services and products.
      </p>
      <p className="mb-4">
        We may also use your email address to send you newsletters about our
        products, services, and discounts. You can unsubscribe from these
        newsletters at any time using the link provided.
      </p>

      <h3 className="font-bold text-lg mb-2">Tracking and Cookies Data</h3>
      <p className="mb-4">
        We use cookies and similar technologies to track activity on our Service
        and collect information such as language, location, and browser details.
        Cookies are small data files sent from a website and stored on your
        device. We use different types of cookies, including session cookies,
        preference cookies, and security cookies, to improve and analyze our
        Service.
      </p>

      <h2 className="font-bold text-xl mb-2">Data Transfer</h2>
      <p className="mb-4">
        Your information, including personal data, may be transferred to and
        maintained on computers located outside of your state, province,
        country, or governmental jurisdiction, where data protection laws may
        differ. By using our Service and providing your information, you consent
        to such transfer.
      </p>

      {/* Include other sections in the same manner */}

      <h2 className="font-bold text-xl mb-2">Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us
        at{" "}
        <a
          href="mailto:support@cdkeyzone.com"
          className="text-blue-600 hover:underline"
        >
          support@cdkeyzone.com
        </a>
        .
      </p>
    </div>
  );
};

export default PrivacyPolicy;
