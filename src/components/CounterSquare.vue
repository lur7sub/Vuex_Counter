<template>
  <div class="counter-squared" :style="{ color: $store.state.colorCode }">
    {{ $store.state.counter }}
    <sup>2</sup> = {{ $store.getters.counterSquared }}
  </div>
</template>

<script>
export default {};
</script>

<style></style>
