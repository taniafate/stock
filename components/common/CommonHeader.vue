<script setup lang="ts">
import { NAVIGATION_LINKS } from '~/constants/navigationLinks';
</script>

<template>
  <header class="header">
    <div class="header__top"></div>
    <div class="header__controls">
      <ul class="header__navigation">
        <li
          v-for="link in NAVIGATION_LINKS"
          :key="link.id"
        >
          <NuxtLink
            :to="link.href"
            class="header__link"
            exact-active-class="header__link--active"
          >
            <component :is="link.icon" class="header__link-icon" />
            <span class="header__link-title">{{ link.title }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 110px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-inline-size: 1200px;
  margin-inline: auto;
  margin-bottom: 74px;
  padding: 0 10px;
}

.header__top {
  height: 40px;
  border-radius: 0 0 10px 10px;
  background: var(--primary-200);
}

.header__controls {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.header__navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
} 

.header__link {
  width: 86px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding-top: 6px;
  padding-bottom: 7px;
  border-radius: 10px;

  &--active {
    background-color: var(--primary-100);
  }
}

.header__link-title {
  font-size: var(--link-fs);
  font-weight: var(--bold-weight);
  line-height: var(--s-height);
}

.header__link-icon {
  width: 20px;
  height: 20px;
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .header {
    margin-bottom: 34px;
  }

  .header__controls {
    justify-content: center;
  }
}
</style>