<template>
  <div class="container">
    <div></div>
    <div style="margin-bottom: 2rem;">
      <div class="items">
        <Fade :delay="0" style="display: flex; justify-content: center;">
          <div class="titles">
            <div class="subtitle">
              <span class="capitalize">CONTACT ME</span>
              <br />
              martin.studna2@gmail.com
              <br />
              +420 775 058 619
            </div>
            <h1 class="title">MARTIN STUDNA</h1>
            <div class="subtitle" style="font-size: 1.2em; margin-left: .5rem;">DEEP LEARNING ENGINEER & CONSULTANT</div>
          </div>
        </Fade>
      </div>

    </div>
    <Fade style="">
      <button class="scrollDownButton" @click="scroll" aria-label="scroll-down">
        <div class="buttonArrow"></div>
      </button>
    </Fade>
  </div>
</template>
<script lang="ts">
//import FadeUp from './FadeUp.vue'
import Fade from './Fade.vue'

export default {
  methods: {
    scroll() {
      const aboutSection = document.getElementById("about");
      const headerOffset = 150;
      const elementPosition = aboutSection?.getBoundingClientRect().top;
      const offsetPosition = elementPosition! + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  },
  components: { Fade }
}
</script>
<style>
.container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 90vh;
}

.items {
  display: grid;
  grid-template-columns: 1fr;


  justify-items: center;
}

.titles {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title {
  color: black;
  margin-bottom: 0; 
  font-size: 7em;
  margin-top: 0;
}

.subtitle {
  color: var(--gray);
}


.profileImage {
  background-image: url("@/assets/Martin Studna-48.png");
  width: 400px;
  height: 600px;
  box-shadow: 0 0 10px 10px white inset;
  background-size: contain;
  background-repeat: round;
  border-radius: 30px;
  margin-left: 2rem;
  /* opacity: .9; */

}


.scrollDownButton {
  flex-direction: column;
  font-size: small;
  justify-self: flex-end;
  
  margin-bottom: 40px;
  background-color: transparent;
  padding: 8px;
  border: none;
  text-decoration: none;
  cursor: pointer;
}

.buttonArrow {
  position: relative;
  width: 32px;
  height: 32px;
  border-left: 6px solid black;
  border-radius: 2.5px;
  border-bottom: 6px solid black;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-animation: sdb04 2s infinite;
  animation: sdb04 1.6s infinite;
  box-sizing: border-box;
}

.buttonArrow:hover {
  border-left: 6px solid #3A4750;
  border-bottom: 6px solid #3A4750;
}


@-webkit-keyframes sdb04 {
  0% {
    -webkit-transform: rotate(-45deg) translate(0, 0);
  }

  20% {
    -webkit-transform: rotate(-45deg) translate(-10px, 10px);
  }

  40% {
    -webkit-transform: rotate(-45deg) translate(0, 0);
  }
}

@keyframes sdb04 {
  0% {
    transform: rotate(-45deg) translate(0, 0);
  }

  20% {
    transform: rotate(-45deg) translate(-10px, 10px);
  }

  40% {
    transform: rotate(-45deg) translate(0, 0);
  }
}

@media (max-width: 768px) {
  .container {
    margin-top: 10rem;
    height: 75vh;
    margin-top: 10rem;
  }

  .scrollDownButton {

    margin-top: 2rem;
  }

  .items {
    grid-template-columns: 1fr;
    place-items: center;
    gap: 2rem;
    grid-row-end: 2;
  }

  .titles {
    text-align: center;
  }

  .title {
    
  }

  #profile-image-container {
    width: 100%;
  }

  .profileImage {

    width: 100%;
    height: 300px;
    /* background-repeat: unset; */
    margin-left: 0;
  }

}

@media (max-width: 500px) {
  .title {
    font-size: 4em;
  }
}

</style>