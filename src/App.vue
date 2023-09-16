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


body::-webkit-scrollbar-track
{
	/* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); */
  border: 1px solid rgb(209, 209, 209);
	background-color: #ffffff;
}

body::-webkit-scrollbar
{
	width: 10px;
	background-color: #ffffff;
}

body::-webkit-scrollbar-thumb
{
	background-color: #000000;
}


.footer-line {
  width: 100%;
  height: 1px;
  opacity: 0.1;
  content: " ";
  background-color: rgb(7, 5, 18);
}

</style>

