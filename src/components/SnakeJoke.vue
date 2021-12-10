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
    get_joke_snaked() {
      this.$store.dispatch("snake_joke");
    },
  },
  computed: {
    snake_joke() {
      return this.$store.state["snake_joke"];
    },
  },
};
</script>

<style scoped>
</style>