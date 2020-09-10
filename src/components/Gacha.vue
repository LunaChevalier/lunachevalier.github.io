<template>
  <div class="gacha">
    <TargetIngredients :targetIngredients="targetIngredients"></TargetIngredients>
    <label class="text-nowrap">具の数:</label><input class="count m-2" v-model="count">
    <label class="lottery btn btn-primary m-2" for="toggle" @click="lottery()" :disabled="!(Number.isInteger(parseInt(count, 10))) || count < 1">{{isCheck ? "もとに戻す" : "具材を決定"}}</label>
    <input type="checkbox" id="toggle" v-model="isCheck">
    <GachaResult :ingredients="ingredients" ></GachaResult>
  </div>
</template>

<script lang='ts'>
  import { Component, Vue } from 'vue-property-decorator';
  import GachaResult from '@/components/GachaResult.vue';
  import TargetIngredients from '@/components/TargetIngredients.vue';
  import { Ingredient } from '@/types/Ingredient.d.ts';
  import ingredient from '@/assets/json/ingredients.json';

  @Component({
    components: {
      GachaResult,
      TargetIngredients,
    },
  })

  export default class Gacha extends Vue {
    protected count!: number;
    protected ingredients!: Ingredient[];
    protected targetIngredients!: Ingredient[];
    protected isCheck = false;

    protected data() {
      return {
        ingredients: [],
        count: 1,
        targetIngredients: ingredient,
      };
    }

    private lottery() {
      if (this.isCheck) return;
      const out = ingredient;
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

<style module lang='less'>
  @import '../assets/less/gacha.less';
</style>
