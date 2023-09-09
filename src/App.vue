<template>
    <NavigationBar />
    <router-view class="wrapper"/>
    <br class="wrapper footer-line">
    <Footer class="wrapper"/>
</template>

<script lang="ts">
import Footer from "./components/Footer.vue";
import  NavigationBar  from "./components/NavigationBar.vue";
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    NavigationBar,
    Footer
}
});

</script>
<style>
#app {
  display: flex;
  align-items: center;
  flex-direction: column;
}





.footer-line {
  width: 100%;
  height: 1px;
  opacity: 0.1;
  content: " ";
  background-color: rgb(7, 5, 18);
}

</style>

