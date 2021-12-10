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
      this.$store.dispatch("loud_joke");
    },
  },
  computed: {
    loud_joke() {
      return this.$store.state["loud_joke"];
    },
  },
};
</script>

<style scoped>
</style>