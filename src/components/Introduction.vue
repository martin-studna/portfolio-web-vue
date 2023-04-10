<template>
    <FadeUp :delay="0">
    <div class="container">
        <div>
          <div class="items">
            <div class="titles">
              <div class="subtitle">
                <span class="capitalize">CONTACT ME</span>
                <br />
                hello@martin-studna.com
                <br />
                +420 775 058 619
              </div>
              <h1 class="title">Martin Studna</h1>

            </div>
            <img class="profileImage" src="/profile.jpeg" alt="profile-image" />        
          </div>

        </div>
        <button class="scrollDownButton" @click="scroll" aria-label="scroll-down">
          <div class="buttonArrow"></div>
        </button>
      </div>
    </FadeUp>
</template>
<script lang="ts">
import FadeUp from './FadeUp.vue'

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
    components: { FadeUp }
}
</script>
<style>

.container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 17rem;
  flex-direction: column;
  align-items: center;
  height: 65vh;
}

.items {
 display: grid;
 grid-template-columns: 1fr 1fr; 
 
 
 justify-items: center;
}

.titles {
  display: flex;
  flex-direction: column; 
  justify-content: flex-end;
}

.title {
  color: black;
  margin-top: 0;
}

.subtitle {
  color: var(--gray);
}


.profileImage {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
}


.scrollDownButton {
  flex-direction: column;
  font-size: small;
  justify-self: flex-end;
  margin-top: auto;
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
    margin-top: 8rem;
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
    margin-bottom: 0;
  }
}
    
</style>