import { fetchData } from "~/fetchApi/products";
import type { IProduct } from "~/types";
import { useStorage } from '@vueuse/core';

export const useProductsStore = defineStore('products', () => {
  
  const data = fetchData()
  const products = ref<IProduct[]>(data)

  const filterValue = useStorage('filterValue', '', sessionStorage)

  const filteredProducts = computed(() => {
    if (filterValue.value === 'Аукцион')
      return products.value.filter((el) => el.saleType === 'Аукцион')
  
    else if (filterValue.value === 'Прямые продажи')
      return products.value.filter((el) => el.saleType === 'Прямые продажи')
  
    else 
      return products.value
  })

  const searchValue = ref('')

  const filteredSearchedProducts = computed( () => {
    if (!searchValue.value.length)
      return filteredProducts.value
    
    else
      return filteredProducts.value.filter( product => 
      product.title.toLowerCase().includes(searchValue.value.toLowerCase())
    )
  })

  const favoriteProducts = computed(() => filteredSearchedProducts.value.filter((el) => el.isFavourites === true) ?? [])
  const stockProducts = computed(() => filteredSearchedProducts.value.filter((el) => el.isStock === true) ?? [])
  const dealProducts = computed(() => filteredSearchedProducts.value.filter((el) => el.isDeal === true) ?? [])
  
  return {
    products,
    filterValue,
    filteredProducts,
    searchValue,
    filteredSearchedProducts,
    stockProducts,
    favoriteProducts,
    dealProducts
  }
})