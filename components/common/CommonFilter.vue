<script setup lang="ts">
import { useStorage } from '@vueuse/core';
import type { IFilterTag } from '~/types/index';

const props = defineProps<{
  tags: IFilterTag[]
}>()

const emit = defineEmits<{
  (e: 'update', value: string): string
}>()

const currentTagTitle = useStorage('tagTitle', 'Все типы', sessionStorage)

function defineTagClass(title: string) {
  
  const currentTag = props.tags.find((el) => el.title === title)!
  const otherTags = props.tags.filter((el) => el.title !== title) ?? []
  
  if (currentTag)
    currentTag.class = 'filter__tag--active'
    otherTags.forEach((el) => el.class = '')
    currentTagTitle.value = currentTag.title
    
  emit('update', currentTag.title)
}
</script>

<template>
  <div class="filter__container">
    <div class="filter">
      <div
        class="filter__tag-list"
        v-for="tag in tags"
        :key="tag.id"
      >
        <button
          type="button"
          class="filter__tag"
          :class="currentTagTitle === tag.title ? 'filter__tag--active' : ''"
          @click="defineTagClass(tag.title)"
        >
          {{ tag.title }}
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.filter__container {
  display: flex;
  align-items: center;
}

.filter {
  width: fit-content;
  height: 40px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid var(--primary-200);
  background-color: var(--primary-100);
}

.filter__tag-list {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
} 

.filter__tag {
  color: var(--primary-300);
  font-size: var(--text-m-fs);
  line-height: var(--m-height);

  &--active {
    color: var(--primary-500);
  }

  &:hover {
    opacity: 0.8;
  }
}

@media (max-width: 768px) {
  .filter__container {
    width: 100%;
    justify-content: center;
  }

  .filter__tag {
    font-size: var(--text-s-fs);
    line-height: var(--s-height);
  }
}
</style>