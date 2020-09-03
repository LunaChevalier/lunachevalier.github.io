<template>
  <div class="about">
    <h1>カレー具材ガチャ</h1>
    <Gacha></Gacha>
  </div>
</template>

<script lang='ts'>
  import { Component, Vue } from 'vue-property-decorator';
  import Gacha from '@/components/Gacha.vue';

  @Component({
    components: {
      Gacha,
    },
  })
  export default class About extends Vue {}
</script>