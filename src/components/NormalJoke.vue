<template>
  <div>
    <p>{{ joke.joke }}</p>
  </div>
</template>

<script>
export default {
  name: "normal-joke",

  computed: {
    joke() {
      return this.$store.state["joke"];
    },
  },
};
</script>

<style lang="scss" scoped>
</style>