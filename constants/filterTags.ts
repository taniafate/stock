import type { IFilterTag } from "~/types";

export const FILTER_TAGS = ref<IFilterTag[]>([
  {
    id: 1,
    title: 'Все типы',
    class: ''
  },
  { 
    id: 2,
    title: 'Прямые продажи',
    class: ''
  },
  { 
    id: 3,
    title: 'Аукцион',
    class: ''
  }
])