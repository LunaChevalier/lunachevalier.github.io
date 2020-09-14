<template>
  <div class="target-ingredients">
    <h2>抽選対象になる具材</h2>
    <label class="target-ingredient border rounded border-info p-1 m-2" v-for="ingre in listItems" :key="ingre.name">
      <IngredientVue :name="ingre.name" :categories="ingre.categories"></IngredientVue>
    </label>
    <label class="list-item-less-button btn m-2 btn-secondary" v-if="targetIngredients.length == count" type="button" @click="isLess"></label>
    <label class="list-item-more-button btn m-2 btn-primary" v-else type="button" @click="isMore"></label>
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
  data() {
    return {
      count: 2,
    };
  },
  computed: {
    listItems(): Ingredient[] {
      const list = this.targetIngredients;
      return list.slice(0, this.count);
    },
  },
  methods: {
    isMore() {
      this.count = this.targetIngredients.length;
    },
    isLess() {
      this.count = 2;
    },
  },
});
</script>

<style module lang='less'>
  @import '../assets/less/targetIngredient.less';
</style>