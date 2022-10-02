export type FeaturedItem = {
    id: number,
    title: string,
    subtitle: string,
    image: string
}

export type Category = {
    id: number,
    name: string,
    image: string
}

export type Food = {
    id: number,
    name: string,
    category: string,
    image: string,
    price: string
}