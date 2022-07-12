<template>
  <div style="display: flex">
    <img
      alt="Vuex"
      src="../assets/vuex.png"
      style="width: 50%; position: absolute; left: 2rem"
    />
    <div style="display: block; position: absolute; right: 12rem; top: 9rem">
      <CounterView></CounterView>
      <CounterSquare></CounterSquare>
      <ButtonHandler></ButtonHandler>
      <ColorCode style="margin-top: 2rem"></ColorCode>
    </div>
  </div>
</template>

<script>
import ButtonHandler from "../components/ButtonHandler.vue";
import CounterSquare from "../components/CounterSquare.vue";
import CounterView from "../components/CounterView.vue";
import ColorCode from "../components/ColorCode.vue";

export default {
  name: "HomeView",
  components: {
    ButtonHandler,
    CounterSquare,
    CounterView,
    ColorCode,
  },
};
</script>

<style>
div {
  margin-bottom: 10px;
}
.counter {
  font-size: 80px;
}
.buttons button {
  font-size: 40px;
  width: 100px;
  margin: 0 10px;
}
</style>
