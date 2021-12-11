<template>
  <div>
    <p>{{ joke }}</p>
  </div>
</template>

<script>
export default {
  name: "normal-joke",
  // Getting joke from store and getting it to show on page
  computed: {
    joke() {
      return this.$store.state["joke"];
    },
  },
};
</script>

<style lang="scss" scoped>
</style>