<template>
  <div 
    class="hashtag"
    @click="click"
  >
    #{{ hashtag }}
  </div>
</template>

<script>
import {store} from './store'
export default {
  name: "HashTag",
  props: {
    hashtag: {
      type: String,
    },
  },
  setup(props) {
       const click = () => {
      store.setHashtag(props.hashtag)
    }
    return {
      click
    }

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