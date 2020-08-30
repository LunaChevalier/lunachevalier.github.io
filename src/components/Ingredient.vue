<template>
  <div class="ingredient">
    <p>{{ ingre }}</p>
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