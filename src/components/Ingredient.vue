<template>
  <div class="ingredient">
    <div class="rounded">{{ ingre }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    ingre: {
      type: String,
    },
  },
});
</script>