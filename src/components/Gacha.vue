<template>
  <div class="gacha">
    <TargetIngredients :targetIngredients="targetIngredients"></TargetIngredients>
    <label class="text-nowrap">具の数:</label><input class="count m-2" v-model.number="count">
    <label class="lottery btn m-2" :class="isPush() ? 'btn-primary' : 'btn-secondary'" @click="lottery()">
      {{isResultDisplay ? "もとに戻す" : "具材を決定"}}
    </label>
    <transition name="fade">
      <GachaResult :ingredients="ingredients" v-show="isResultDisplay"></GachaResult>
    </transition>
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
    protected isResultDisplay = false;

    protected data() {
      return {
        ingredients: [],
        count: 1,
        targetIngredients: ingredient,
      };
    }

    private lottery() {
      if (!this.isPush()) {
        return;
      }
      this.isResultDisplay = !this.isResultDisplay;
      if (!this.isResultDisplay) {
        return;
      }
      const out = ingredient.concat();
      const count = out.length > this.count ? this.count : out.length;
      for (let i = 0; i < count; i++) {
        const r = Math.floor(Math.random() * (this.targetIngredients.length));
        const tmp = out[i];
        out[i] = out[r];
        out[r] = tmp;
      }

      this.ingredients = out.slice(0, count);
    }

    private isPush(): boolean {
      return Number.isInteger(this.count) && this.count > 0;
    }
  }
</script>

<style module lang='less'>
  @import '../assets/less/gacha.less';
</style>
