<template>
  <div>
    <p>{{ loud_joke }}</p>
    <button @click="get_loud_joke">Get a LOUD joke</button>
  </div>
</template>

<script>
export default {
  name: "loud-joke",
  methods: {
    get_loud_joke() {
      // Calling our loud joke mutation when the button is clicked
      this.$store.commit("get_loud_joke_mutation", this.$store.state["joke"]);
    },
  },
  computed: {
    loud_joke() {
      // Getting our loud joke variable from the store to display on the page
      return this.$store.state["loud_joke"];
    },
  },
};
</script>

<style scoped>
</style>