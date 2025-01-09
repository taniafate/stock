<script setup lang="ts">
type TButtonTypes = 'addToDeal' | 'toPay' | 'isPaid' | 'Favourites' | 'notFavourites'

const props = defineProps<{
  text?: string
  icon?: string
  buttonType?: TButtonTypes
  isDisabled?: boolean
}>()

const emit = defineEmits<{
  onClick: []
}>()

const hasText = computed(() => !!props.text)
const hasIcon = computed(() => !!props.icon)

function getTypeButtonClass(type: TButtonTypes) {
  if (type === 'addToDeal')
    return 'primary-text-button'

  if (type === 'toPay')
    return 'secondary-text-button'

  if (type === 'isPaid')
    return 'neutral-text-button'

  if (type === 'Favourites')
    return 'primary-icon-button'

  if (type === 'notFavourites')
    return 'neutral-icon-button'
}
</script>

<template>
  <button
    type="button"
    class="button"
    :data-text="hasText"
    :data-icon="hasIcon"
    :disabled=isDisabled
    :class="getTypeButtonClass(props.buttonType!)"
    @click="emit('onClick')"
  >
    <span class="button__text" v-if="text">
      {{ text }}
    </span>
    <component class="button__icon" :is="icon" v-if="icon" />
  </button>
</template>

<style lang="scss" scoped>
.button {
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-size: var(--text-m-fs);
  font-weight: var(--bold-weight);

  &:hover {
    opacity: 0.8;
  }

  &:active {
    transform: translateY(1px);
  }
}

[data-text='true'].button {
  width: 100%;
  min-width: 126px;
}

[data-icon='true'].button {
  width: 40px;
}

.primary-text-button {
  color: var(--primary-500);
  background-color: var(--primary-100);
}

.secondary-text-button {
  color: var(--neutral-100);
  background-color: var(--secondary-500);
}

.neutral-text-button {
  color: var(--primary-300);
  background-color: var(--neutral-100);
  border: 1px solid var(--primary-200);
}

.button__icon {
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.primary-icon-button {
  color: #E5E5E5;
  background-color: var(--primary-500);
}

.neutral-icon-button {
  color: var(--primary-500);
  background-color: var(--primary-100);
}

.button[disabled] {
  cursor: auto;
  
  &:hover {
    opacity: 1;
  }

  &:active {
    transform: none;
  }
}

@media (min-width: 769px) {
  [data-text='true'].button {
    min-width: 222px;
  }
}
</style>