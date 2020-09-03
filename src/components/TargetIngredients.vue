<template>
  <div class="target-ingredients">
    <h2>抽選対象になる具材</h2>
    <label class="target-ingredient border rounded border-info p-1 m-2" v-for="ingre in targetIngredients">
      {{ingre}}
    </label>
  </div>
</template>

<script lang="ts">
import Vue, { PropType }  from 'vue';

export default Vue.extend({
  props: {
    targetIngredients: {
      type: Array as PropType<string[]>,
    },
  },
});
</script>