<template>
  <div class="gacha-result">
    <p v-for="ingre in ingres">
      {{ ingre }}
    </p>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export default Vue.extend({
  props: {
    ingres: Array as PropType<string[]>,
  },
});
</script>