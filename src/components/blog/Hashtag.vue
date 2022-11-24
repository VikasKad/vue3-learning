<template>
  <h1>{{ hashtag }}</h1>
</template>

<script>
export default {
  name: "HashTag",
  props: {
    hashtag: {
      type: String,
    },
  },
  setup(props) {
    console.log("props", props);
  },
};
</script>

<style>
</style>