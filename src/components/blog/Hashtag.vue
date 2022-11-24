<template>
  <div class="hashtag" @click="click">{{ hashtag }}</div>
</template>

<script>
export default {
  name: "HashTag",
  emits:['setHashtag'],
  props: {
    hashtag: {
      type: String,
    },
  },
  setup(props, ctx) {
    console.log("props", props);
    const click = () => {
      // store.setHashtag(props.hashtag)
      ctx.emit("setHashtag", props.hashtag);
    };
    return {
      click,
    };
  },
};
</script>

<style>
.hashtag {
  text-decoration: underline;
}
.hashtag:hover {
  color: cornflowerblue;
}
</style>