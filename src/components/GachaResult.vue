<template>
  <div class="gacha-result">
    <label class="border rounded border-info p-1 m-2" v-for="ingre in ingredients" :key="ingre.name">
      <IngredientVue :name="ingre.name" :categories="ingre.categories"></IngredientVue>
    </label>
  </div>
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