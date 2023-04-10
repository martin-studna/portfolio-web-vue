<template>
    <div>
        <FadeUp>
            <div class="title3">MY SERVICES</div>
        </FadeUp>
        <div class="services-items">
            <FadeUp>
                <div>
                    <div class="title4">MACHINE LEARNING</div>
                    <div>Unlock the full potential of machine learning with my expert services. I offer custom model
                        development, data analysis, and deployment solutions to help you achieve your goals. Let me guide
                        you through the complexities of this powerful technology and deliver results for your business.
                    </div>
                </div>
            </FadeUp>
            <FadeUp>
                <div>
                    <div class="title4">COMPUTER VISION</div>
                    <div>With experience in both industry and academia, I have developed a deep expertise in computer
                        vision. I am skilled in implementing state-of-the-art models from the latest research articles, and
                        proficient in PyTorch, TensorFlow, and OpenCV. I offer customized solutions to meet your unique
                        needs and take your computer vision projects to the next level.</div>
                </div>
            </FadeUp>
            <FadeUp>
                <div>
                    <div class="title4">NATURAL LANGUAGE PROCESSING</div>
                    <div>With a deep understanding of Natural Language Processing (NLP), I have the skills and experience to
                        help you take full advantage of this exciting technology. Drawing on my expertise in developing
                        chatbots, speech recognition software, and other NLP tasks, I offer customized solutions tailored to
                        your specific needs. Having attended NLP courses at UFAL, one of the world's most respected NLP
                        departments, I stay up to date with the latest techniques and tools in this field. Let me help you
                        succeed in your NLP projects.</div>
                </div>
            </FadeUp>
            <FadeUp>
                <div>
                    <div class="title4">FRONTEND DEVELOPMENT</div>
                    <div>Using cutting-edge frameworks such as Vue and React, I create dynamic, responsive websites that
                        engage your visitors. With a focus on delivering an exceptional user experience and attention to
                        detail, I offer customized solutions that are optimized for your business needs. Let me help you
                        bring your website vision to life with a website that stands out from the crowd.</div>
                </div>
            </FadeUp>
            <FadeUp>
                <div>
                    <div class="title4">BACKEND DEVELOPMENT</div>
                    <div>With extensive experience in backend development, I specialize in creating high-performance
                        applications using C# and NodeJs, and leveraging technologies such as ASP.NET, Docker, SQL,
                        Redis, Messaging protocols, and Cloud technologies. Trust me to build a backend that meets
                        your business needs and provides your users with an exceptional experience.</div>
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
.services-items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    margin-top: 20px;
}

@media (max-width: 768px) {
    .services-items {
        grid-template-columns: repeat(1, 1fr);
        justify-items: center;

    }
}
</style>