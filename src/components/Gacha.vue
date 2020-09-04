<template>
  <div class="gacha">
    <TargetIngredients :targetIngredients="targetIngredients"></TargetIngredients>
    <label class="text-nowrap">具の数:</label><input class="count m-2" v-model="count">
    <button class="lottery btn btn-primary m-2" @click="lottery()" :disabled="!(Number.isInteger(parseInt(count, 10))) || count < 1">具材を決定</button>
    <GachaResult :ingredient="ingredients" ></GachaResult>
  </div>
</template>

<script lang='ts'>
  import { Component, Vue } from 'vue-property-decorator';
  import GachaResult from '@/components/GachaResult.vue';
  import TargetIngredients from '@/components/TargetIngredients.vue';
  import Ingredient from '@/types/Ingredient';
  import ingredient from '@/assets/json/ingredients.json';

  @Component({
    components: {
      GachaResult,
      TargetIngredients,
    },
  })

  export default class Gacha extends Vue {
    protected count!: number;
    protected ingredients!: string[];
    protected targetIngredients!: string[];

    protected data() {
      return {
        ingredients: [],
        count: 1,
        targetIngredients: Array.from(ingredient.map((ingre) => ingre.name)),
      };
    }

    private lottery() {
      const out = Array.from(ingredient.map((ingre) => ingre.name));
      const count = out.length > this.count ? this.count : out.length;
      for (let i = 0; i < count; i++) {
        const r = Math.floor(Math.random() * (this.targetIngredients.length));
        const tmp = out[i];
        out[i] = out[r];
        out[r] = tmp;
      }

      this.ingredients = out.slice(0, count);
    }
  }
</script>
