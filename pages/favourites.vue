<script setup lang="ts">
import ProductCard from '~/components/ProductCard.vue';

useHead({
  title: 'Избранное',
})

const { favoriteProducts } = storeToRefs(useProductsStore())
</script>

<template>
  <ProductCard :products="favoriteProducts" />
</template>

<style lang="scss" scoped>
</style>