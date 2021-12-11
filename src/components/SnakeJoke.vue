<template>
  <div>
    <p>{{ snake_joke }}</p>
    <button @click="get_joke_snaked">Get Snake Joke</button>
  </div>
</template>

<script>
export default {
  name: "snake-joke",
  methods: {
    // Calling our snake joke in mutations
    get_joke_snaked() {
      this.$store.commit("snake_joke", this.$store.state["joke"]);
    },
  },
  computed: {
    snake_joke() {
      // getting snake joke from our state and returning it to display on the page
      return this.$store.state["snake_joke"];
    },
  },
};
</script>

<style scoped>
</style>