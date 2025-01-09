<script setup lang="ts">
import { FILTER_TAGS } from '~/constants/filterTags';

const { filterValue, searchValue } = storeToRefs(useProductsStore())
</script>

<template>
  <div class="product-search-field">
    <CommonFilter
      :tags="FILTER_TAGS"
      @update="(value: string) => filterValue = value"
    />
    <CommonSearch
      v-model:="searchValue"
      @on-search="(value: string) => searchValue = value"
    />
  </div>
</template>

<style lang="scss" scoped>
.product-search-field {
  display: grid;
  grid-template-columns: 1fr 274px;
  align-items: center;
  gap: 12px;
  max-inline-size: 1200px;
  margin-inline: auto;
  margin-bottom: 36px;
  padding: 0 10px;
}

@media (max-width: 768px) {
  .product-search-field {
    display: flex;
    height: fit-content;
    flex-direction: column;
  }
}
</style>