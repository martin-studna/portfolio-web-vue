<template>
    <div>
        <FadeUp>
            <div class="title3">MY SERVICES</div>
        </FadeUp>
        <div class="services-items">
            <FadeUp>
                <div>
                    <div class="title4">MACHINE LEARNING</div>
                    <ul>
                        <li>Custom model development for specific business needs</li>
                        <li>Data analysis to extract valuable insights from large datasets.</li>
                        <li>MLOps - Deployment solutions for seamless integration into existing systems.</li>
                        <li>Recommendation systems for personalized product/service recommendations.</li>
                        <li>Fraud detection</li>
                        <li>Time series forecasting and anomaly detection</li>
                        <li>Algorithmic trading</li>
                        <li>Technology: Scikit-learn, Pandas</li>
                        
                    </ul>
                </div>
            </FadeUp>
            <FadeUp>
                <div>
                    <div class="title4">COMPUTER VISION</div>
                    <ul>
                        <li>Custom object detection and recognition system for businesses' hardware and software</li>
                        <li>Facial recognition system for access control and personalized customer experiences</li>
                        <li>Video analytics platform for real-time surveillance and security monitoring</li>
                        <li>Recommendation systems for personalized product/service recommendations.</li>
                        <li>Image and video analysis software for valuable insights and information.</li>
                        <li>Technology: Tensorflow, PyTorch, OpenCV</li>
                    </ul>
                </div>
            </FadeUp>
            <FadeUp>
                <div>
                    <div class="title4">NATURAL LANGUAGE PROCESSING</div>
                    <ul>
                        <li>Chatbot development using natural language processing for personalized customer interactions</li>
                        <li>Text classification for customer service automation and email filtering</li>
                        <li>Conversational AI platforms using natural language processing for virtual assistants and chatbots</li>
                        <li>Voice assistants and voice recognition systems for smart homes and smart devices</li>
                        <li>Language modeling and generation for automated content creation and product description generation.</li>
                    </ul>
                </div>
            </FadeUp>
            <FadeUp>
                <div>
                    <div class="title4">FRONTEND DEVELOPMENT</div>
                    <ul>
                        <li>I create dynamic, responsive websites using Vue and React frameworks.</li>
                        <li>My customized solutions are optimized for your business needs.</li>
                        <li>My expertise in web design brings your website vision to life.</li>
                        <li>I design websites that engage your visitors and deliver exceptional user experiences.</li>
                        <li>Let me help you create a website that stands out and delivers results.</li>
                    </ul>
                </div>
            </FadeUp>
            <FadeUp>
                <div>
                    <div class="title4">BACKEND DEVELOPMENT</div>
                    <ul>
                        <li>I have extensive experience in backend development using C# and NodeJs.</li>
                        <li>I leverage technologies such as ASP.NET, Docker, SQL, Redis, Messaging protocols, and Cloud technologies to create high-performance applications.</li>
                        <li>Trust me to build a backend that provides your users with an exceptional experience.</li>
                        <li>I specialize in creating scalable, secure, and reliable backend systems that can handle high traffic and complex workflows.</li>
                        <li>Let me help you create a backend that powers your business and delivers results.</li>
                        
                    </ul>
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