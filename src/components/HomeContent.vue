<template>
  <div>
    <normal-joke></normal-joke>
    <joke-button></joke-button>
    <loud-joke></loud-joke>

    <snake-joke></snake-joke>
  </div>
</template>

<script>
import JokeButton from "./JokeButton.vue";
import LoudJoke from "./LoudJoke.vue";
import NormalJoke from "./NormalJoke.vue";
import SnakeJoke from "./SnakeJoke.vue";
export default {
  name: "home-content",

  components: {
    JokeButton,
    LoudJoke,
    NormalJoke,
    SnakeJoke,
  },
};
</script>

<style scoped>
</style>