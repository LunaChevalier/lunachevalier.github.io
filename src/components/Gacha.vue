<template>
  <div class="gacha">
    <button @click="lottery()">push</button>
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
    data() {
      return {
        ingres: [],
      }
    }
    private lottery() {
      const ingres: string[] = ['玉ねぎ', '人参', 'じゃがいも'];
      const out = Array.from(ingres);
      for (let i = out.length - 1; i > 0; i--) {
        const r = Math.floor(Math.random() * (i + 1));
        const tmp = out[i];
        out[i] = out[r];
        out[r] = tmp;
      }
      this.ingres = out
    }
  }
</script>