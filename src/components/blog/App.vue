<template>
  <div class="cards-container">
    <card-container v-for="post in store.state.posts" :key="post.id">
      {{ post.id }}

      <template v-slot:title> {{ post.title }}</template>
      <template v-slot:content>
        {{ post.content }}
      </template>
      <template v-slot:description>
        <ControlsContainer :post="post" @setHashtag="setHashtag" />
      </template>
    </card-container>
  </div>
  <h1>
    {{ currentTag }}
  </h1>
</template>

<script>
import { store } from "./store";
import CardContainer from "./../CardContainer.vue";
import ControlsContainer from "./Controls.vue";
import { ref } from "vue";
export default {
  name: "AppContainer",
  components: {
    CardContainer,
    ControlsContainer,
  },
  setup() {
    const currentTag = ref();
    const setHashtag = (val) => {
      currentTag.value = val;
    };
    return {
      store,
      currentTag,
      setHashtag,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cards-container {
  display: flex;
}
</style>
