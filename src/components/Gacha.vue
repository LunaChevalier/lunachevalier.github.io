<template>
  <div class="gacha">
    <p>具の数:</p><input class="count" v-model="count">
    <button class="lottery" @click="lottery()">具材を決定</button>
    <GachaResult :ingres="ingres" ></GachaResult>
  </div>
</template>

<script lang='ts'>
  import { Component, Vue } from 'vue-property-decorator';
  import GachaResult from '@/components/GachaResult.vue';

  @Component({
    components: {
      GachaResult,
    },
  })

  export default class Gacha extends Vue {
    protected count!: number;
    protected ingres!: string[];
    protected data() {
      return {
        ingres: [],
        count: 1,
      };
    }
    private lottery() {
      const ingres: string[] = ['玉ねぎ', '人参', 'じゃがいも', '大根'];
      const out = Array.from(ingres);
      const count = out.length > this.count ? this.count : out.length;
      for (let i = 0; i < count; i++) {
        const r = Math.floor(Math.random() * (i + 1));
        const tmp = out[i];
        out[i] = out[r];
        out[r] = tmp;
      }

      this.ingres = out.slice(0, count);
    }
  }
</script>
