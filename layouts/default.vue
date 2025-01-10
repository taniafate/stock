<script setup lang="ts">
</script>

<template>
  <CommonHeader />
  <ProductSearchField />
  <div class="default__content">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.default__content {
  display: flex;
  flex-direction: column;
  gap: 34px;
  max-inline-size: 1200px;
  margin-inline: auto;
  padding: 0 10px 74px 10px;
}

@media (max-width: 768px) {
  .default__content {
    gap: 26px;
    max-inline-size: 768px;
    padding: 0 10px 34px 10px;
  }
}
</style>