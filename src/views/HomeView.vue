<template>
  <div class="main">
    <Introduction/>
    <About/>
    <Services/>
    <Experience/>
    <Projects/>
  </div>
</template>

<script lang="ts">
import About from '@/components/About.vue';
import Experience from '@/components/Experience.vue';
import Introduction from '@/components/Introduction.vue';
import Projects from '@/components/Projects.vue';
import Services from '@/components/Services.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    Introduction,
    About,
    Experience,
    Projects,
    Services
},
});
</script>

<style>
.container {
  padding: 0 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.main {
  min-height: 100vh;
  padding: 4rem 15px;
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 10rem;
}





@media (max-width: 768px) {
  .main {
    width: 100%;
    padding: 0 15px;
  }
}

@media (prefers-color-scheme: dark) {
  .code {
    background: #111;
  }
  .logo img {
    filter: invert(1);
  }
}
</style>
