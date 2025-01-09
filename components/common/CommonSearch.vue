<script setup lang="ts">
const emit = defineEmits<{
  (e: 'onSearch', value: string): string
}>()

const searchValue = defineModel<string>('')
</script>

<template>
  <div class="search">
    <input
      class="search__input"
      type="search"
      placeholder="Например, доска"
      v-model="searchValue"
      @keyup.enter="emit('onSearch', searchValue!)"
    >
    <button
      type="button"
      class="search__button"
      @click="emit('onSearch', searchValue!)"
    >
      <component class="search__button-icon" is="i-search" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.search {
  width: 274px;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  padding: 4px 4px 4px 20px;
  border: 1px solid var(--primary-200);
  border-radius: 10px;
}

.search__input {
  width: calc(100% - 40px);
}

.search__button {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  color: var(--neutral-100);
  background-color: var(--primary-500);
  border-radius: 10px;
}

.search__button-icon {
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>