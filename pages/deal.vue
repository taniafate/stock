<script setup lang="ts">
import ProductCard from '~/components/ProductCard.vue';

useHead({
  title: 'Сделки',
})

const { dealProducts } = storeToRefs(useProductsStore())
</script>

<template>
  <ProductCard :products="dealProducts" />
</template>

<style lang="scss" scoped>
</style>