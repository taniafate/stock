export interface IProduct {
  id: number
  image: string
  saleType: string
  title: string
  city: string
  seller: string
  category: string
  description: string
  price: number
  quantity: number
  isFavourites: boolean
  isDeal: boolean
  isStock: boolean
  isPaid: boolean
}

export interface IFilterTag {
  id: number
  title: string
  class: string
}

