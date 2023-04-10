<template>
  <NavigationBar/>
  <router-view/>
  <footer class="footer">

  </footer>
</template>

<script lang="ts">
import  NavigationBar  from "./components/NavigationBar.vue";
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    NavigationBar
  }
});

</script>
<style>
#app {
  display: flex;
  align-items: center;
  flex-direction: column;
}

</style>

