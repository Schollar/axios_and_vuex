<template>
  <div>
    <button @click="get_a_joke">Get a Joke!</button>
  </div>
</template>

<script>
export default {
  name: "joke-button",
  methods: {
    get_a_joke() {
      // Calling our get_joke action to make api call when button is clicked
      this.$store.dispatch("get_joke");
    },
  },
};
</script>

<style scoped>
</style>