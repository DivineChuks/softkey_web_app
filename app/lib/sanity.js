import {createClient} from "next-sanity"

export const client = createClient({
    projectId: "igy4vdgm",
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: true
})

const builder = imageUrlBuilder(client)

export function urlFor(source) {
    return builder.image(source)
}