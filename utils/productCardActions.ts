import type { IProduct } from "~/types";

export function favouritesStateToggle(product: IProduct) {
  if (product.isFavourites)
    return [product.isFavourites = false, product.isStock = true]

  else
    return [product.isFavourites = true, product.isStock = false, product.isDeal = false]
}

export function getDealState(product: IProduct) {
  if (!product.isDeal)
    return [product.isDeal = true, product.isStock = false, product.isFavourites = false]
}

export function getPaidState(product: IProduct) {
  if (!product.isPaid)
    return product.isPaid = true
}