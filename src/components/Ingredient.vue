<template>
  <div class="ingredient">
    <div class="rounded" :class="[categories]">{{ name }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    name: {
      type: String,
    },
    categories: {
      type: Array,
    },
  },
});
</script>

<style module lang='less'>
  @import '../assets/less/ingredient.less';
</style>
