<template>
  <div class="gacha-result">
    <label class="border rounded border-info p-1 m-2" v-for="ingre in ingres">
      {{ ingre }}
    </label>
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