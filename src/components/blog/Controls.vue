<template>
  <button>Likes</button> {{ post.likes }} {{ post }}
  <hash-tag
    v-for="hashtag in post.hashtags"
    :key="hashtag"
    :hashtag="hashtag"
    @setHashtag="setHashtag"
  >
  </hash-tag>
</template>

<script>
import HashTag from "./Hashtag.vue";
export default {
  name: "ControlsContainer",
  components: {
    HashTag,
  },
  emits:['setHashtag'],
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  setup(props, ctx) {
    console.log("props", props);
    const setHashtag = (value) => {
      console.log("value", value);
      ctx.emit("setHashtag", value);
    };
    return {
      setHashtag,
    };
  },
};
</script>

<style>
</style>