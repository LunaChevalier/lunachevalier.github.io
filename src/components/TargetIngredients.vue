<template>
  <div class="target-ingredients">
    <h2>抽選対象になる具材</h2>
    <label class="target-ingredient border rounded border-info p-1 m-2" v-for="ingre in targetIngredients" :key="ingre.name">
      <IngredientVue :name="ingre.name" :categories="ingre.categories"></IngredientVue>
    </label>
  </div>
</template>

<script lang="ts">
import { Ingredient } from '@/types/Ingredient.d.ts';
import IngredientVue from '@/components/Ingredient.vue';
import Vue, { PropType } from 'vue';

export default Vue.extend({
  components: {
    IngredientVue,
  },
  props: {
    targetIngredients: {
      type: Array as PropType<Ingredient[]>,
    },
  },
});
</script>
