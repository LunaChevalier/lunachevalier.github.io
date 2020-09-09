<template>
  <transition name="gacha-result" mode="out-in">
    <div>
      <label class="gacha-ingredient border rounded border-info p-1 m-2" v-for="ingre in ingredients" :key="ingre.name">
        <IngredientVue :name="ingre.name" :categories="ingre.categories"></IngredientVue>
      </label>
    </div>
  </transition>
</template>

<script lang="ts">
import { Ingredient } from '@/types/Ingredient';
import IngredientVue from '@/components/Ingredient.vue';
import Vue, { PropType } from 'vue';

export default Vue.extend({
  components: {
    IngredientVue,
  },
  props: {
    ingredients: Array as PropType<Ingredient[]>,
  },
});
</script>