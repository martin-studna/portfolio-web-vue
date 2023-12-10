<template lang="">
    <div id="about" style="height: 100vh; display: flex; flex-direction: column; justify-content: center" >
      <FadeUp> 
       <h1 class="description" >I'm a Deep Learning Engineer & Consultant</h1>
      </FadeUp>
      <FadeUp>
      <div class="subDescription">
        <span style="font-weight: bold">Deep Learning, Computer Vision and LLMs</span>,
        5 years of professional experience in Software Engineering,
        <br/>
        The MSc. in Artificial Intelligence, Charles University in Prague, 
      Faculty of Mathematics and Physics
      </div>
      </FadeUp>
        <FadeUp>
        <div class="capitalize">FOLLOW ME</div>
        <div class="links">
            <a href="https://linkedin.com/in/martin-studna" target="_blank">
              <img src="../assets/linkedin-logo.svg" alt="linkedin-logo" style=" margin-bottom: 0.4rem"/>
            </a>
            <a href="https://twitter.com/MartinStudna" target="_blank">
              <img src="../assets/twitter-logo.svg" alt="twitter-logo"/>
            </a>
            <a href="https://medium.com/@martinstudna" target="_blank">
              <img src="../assets/medium-logo.svg" alt="medium-logo" style="height: 38px; width: 38px" />
            </a>
            <a href="https://github.com/martin-studna" target="_blank">
              <img src="../assets/github-logo.svg" alt="github-logo" style="height: 38px; width: 38px" />
            </a>
          <div style="flex-grow: 1" />
              <a href="https://martin-studna.com/CV.pdf" target="_blank" style="display: flex; flex-direction: row; align-items: center">
                <div class="capitalize">RESUME</div>
                <img src="../assets/cv-material-logo.svg" style="margin-left: 0.5rem" alt="cv-logo" />
              </a>
          
        </div>
        </FadeUp>
    </div>
</template>
<script lang="ts">
import FadeUp  from "./FadeUp.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "About",
  components: {
    FadeUp
  }
});

</script>
<style>
.description {
  margin-bottom: 2rem;
}

.subDescription {

  font-size: 3em;
  font-weight: 300;
  margin-bottom: 2rem;
}

.links {
  display: flex;

  margin-left: 0.8rem;
  gap: 2rem;
  align-items: center;
  margin-top: 1.3rem;
  flex-wrap: wrap;
}

.links img {
  width: 35px;
  height: 35px;
}

.links img:hover {
  color: black
}

@media (max-width: 768px) {
  .subDescription {
    font-size: 2em;
  }
}
</style>