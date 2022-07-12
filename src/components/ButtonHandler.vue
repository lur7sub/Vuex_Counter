<template>
  <div class="buttons">
    <button
      @click="$store.dispatch('decreaseCount')"
      :style="{ color: $store.state.colorCode }"
    >
      -
    </button>
    <button
      @click="$store.dispatch('increaseCount')"
      :style="{ color: $store.state.colorCode }"
    >
      +
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
