export type FeaturedItem = {
    id: number,
    title: string,
    subtitle: string,
    image: string
}

export type CategoryType = {
    id: number,
    name: string,
    image: string
}

export type FoodType = {
    id: number,
    name: string,
    category: string,
    image: string,
    price: string
}