<script setup lang="ts">
import ProductCard from '~/components/ProductCard.vue';

useHead({
  title: 'Склад',
})

const { stockProducts } = storeToRefs(useProductsStore())
</script>

<template>
  <ProductCard :products="stockProducts" />
</template>

<style lang="scss" scoped>
</style>