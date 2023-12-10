<template>
    <div style="height: 100vh;">
        <FadeUp>
            <div class="title3">MY SERVICES</div>
        </FadeUp>
        <div class="services-items">
            <FadeUp>
                <div>
                    <div class="title4 service">CUSTOM DEEP LEARNING MODELS</div>
                </div>
            </FadeUp>
            <FadeUp>
                <div>
                    <div class="title4 service">COMPUTER VISION APPLICATIONS</div>
                    
                </div>
            </FadeUp>
            <FadeUp>
                <div>
                    <div class="title4 service">LLMs</div>
                </div>
            </FadeUp>
            <FadeUp>
                <div>
                    <div class="title4 service">FRONTEND DEVELOPMENT</div>
                </div>
            </FadeUp>
            <FadeUp>
                <div>
                    <div class="title4 service">BACKEND DEVELOPMENT DATABASES CLOUD</div>
                    
                </div>
            </FadeUp>
        </div>

    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FadeUp from "./FadeUp.vue";


export default defineComponent({
    name: "Services",
    components: {
        FadeUp
    },
    data() {
        return {

        }
    },
    methods: {

    }
});
</script>
<style>
ul, li {
    list-style-type: unset;
    margin-left: .7rem;
    padding-left: 0;
}
.services-items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 60px;
    margin-top: 80px;
    text-align: center;
}


@media (max-width: 768px) {
    .services-items {
        grid-template-columns: repeat(1, 1fr);
        justify-items: center;
        grid-gap: 100px;
    }
}
</style>