<script setup lang="ts">
import type { IProduct } from '~/types';
import CommonButton from './common/CommonButton.vue';

defineProps<{
  products: IProduct[]
}>()
</script>

<template>
  <div
    class="product-card"
    v-for="product in products"
    :key="product.id"
  >
    <div class="product-card__image-data">
      <img
        class="product-card__image"
        :src="product.image"
      >
      <div class="product-card__data">
        <span class="product-card__sale-type">
          {{ product.saleType }}
        </span>
        <span class="product-card__title">
          {{ product.title }}
        </span>
        <div class="product-card__city">
          <component class="product-card__city-icon" is="i-geo" />
          <span class="product-card__city-title">
            {{ product.city }}
          </span>
        </div>
        <div class="product-card__seller">
          <span class="product-card__seller-tag">Продавец</span>
          <span>
            {{ product.seller }}
          </span>
        </div>
        <div class="product-card__category">
          <span class="product-card__category-tag">Вид товара</span>
          <span class="product-card__category-name">
            {{ product.category }}
          </span>
        </div>
        <p class="product-card__description">
          {{ product.description }}
        </p>
      </div>
    </div>
    
    <div class="product-card__deal">
      <div class="product-card__deal-data">
        <span class="product-card__deal-price">{{ product.quantity*product.price}} ₽</span>
        <ul class="product-card__deal-parameters">
          <li class="product-card__deal-parameter">
            <span class="product-card__deal-tag">Количество</span>
            <span>{{ product.quantity }} шт.</span>
          </li>
          <li class="product-card__deal-parameter">
            <span class="product-card__deal-tag">Стоимость за штуку</span>
            <span>{{ product.price }} ₽</span>
          </li>
        </ul>
      </div>
      <div class="product-card__buttons">
        <CommonButton
          v-if="!product.isDeal"
          button-type="addToDeal"
          text="Добавить в сделки"
          v-on:click="getDealState(product)"
        />
        <CommonButton
          v-if="product.isDeal"
          :button-type="product.isPaid ? 'isPaid' : 'toPay'"
          :text="product.isPaid ? 'Оплачено' : 'Оплатить'"
          :disabled="product.isPaid"
          v-on:click="getPaidState(product)"
        />
        <CommonButton
          :button-type="product.isFavourites ? 'Favourites' : 'notFavourites'"
          icon="i-favourites"
          :disabled="product.isPaid"
          v-on:click="favouritesStateToggle(product)"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-card {
  display: flex;
  justify-content: space-between;
  outline: 1px solid var(--primary-200);
  border-radius: 20px;
}

.product-card__image-data {
  width: 852px;
  display: flex;
  gap: 20px;
  padding: 20px;
}

.product-card__image {
  width: 256px;
  height: 256px;
  border-radius: 10px;
}

.product-card__data {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
}

.product-card__sale-type {
  font-size: var(--text-s-fs);
  color: var(--primary-300);
}

.product-card__title {
  height: 38px;
  font-size: var(--text-m-fs);
  font-weight: var(--bold-weight);
}

.product-card__city {
  display: flex;
  gap: 4px;
  padding: 4px 8px;
  border-radius: 5px;
  background-color: var(--primary-100);
  color: var(--primary-400);
}

.product-card__city-icon {
  width: 15px;
  height: 15px;
}

.product-card__city-title {
  font-size: var(--text-s-fs);
}

.product-card__seller {
  display: flex;
  gap: 4px;
  font-size: var(--text-s-fs);
}

.product-card__seller-tag {
  color: var(--primary-300);
}

.product-card__category {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 8px;
  border-radius: 10px;
  background-color: var(--primary-100);
  font-size: var(--text-s-fs);
}

.product-card__category-tag {
  color: var(--primary-300);
}

.product-card__category-name {
  color: var(--primary-400);
}

.product-card__description {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: var(--text-s-fs);
}

.product-card__deal {
  height: 366px;
  display: grid;
  grid-template-rows: 1fr 40px;
  gap: 12px;
  padding: 20px;
  border-radius: 20px;
  outline: 1px solid var(--primary-200);
}

.product-card__deal-data {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.product-card__deal-price {
  font-size: var(--text-l-fs);
  font-weight: var(--bold-weight);
}

.product-card__deal-parameters {
  display: flex;
  flex-direction: column;
}

.product-card__deal-parameter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 24px;
  font-size: var(--text-s-fs);
}

.product-card__deal-tag {
  color: var(--primary-300);
}

.product-card__buttons {
  display: grid;
  grid-template-columns: 1fr 40px;
  gap: 12px;
}

@media (max-width: 1023px) {
  .product-card__image {
    width: 172px;
    height: 172px;
  }
}

@media (max-width: 768px) {
  .product-card {
    display: flex;
    flex-direction: column;
  }

  .product-card__image-data {
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
  }

  .product-card__image {
    width: 126px;
    height: 126px;
  }

  .product-card__deal {
    height: fit-content;
  }
}
</style>