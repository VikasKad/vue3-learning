<template>
  <button>Likes</button> {{ post.likes }} {{ post }}
  <hash-tag v-for="hashtag in post.hashtags" :key="hashtag" :hashtag="hashtag"> </hash-tag>
</template>

<script>
import HashTag from "./Hashtag.vue";
export default {
  name: "ControlsContainer",
  components: {
    HashTag,
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    console.log("props", props);
  },
};
</script>

<style>
</style>