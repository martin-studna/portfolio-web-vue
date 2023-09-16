<template>
    <div class="fade-up" ref="fadeUp">
        <slot></slot>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "FadeUp",
    props: {
        delay: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            observer: null as null | IntersectionObserver,
        };
    },
    mounted() {

        this.observer = new IntersectionObserver(this.onIntersection, {
            rootMargin: '0px',
            threshold: 0.5
        });

        this.observer.observe(this.$refs.fadeUp as Element);
    },
    beforeUnmount() {
        this.observer!.disconnect();
    },

    unmounted() {
        this.observer!.disconnect();
    },

    methods: {
        onIntersection(entries: any) {
            entries.forEach((entry: any) => {
                if (entry.intersectionRatio > 0) {
                    setTimeout(() => {
                        entry.target.classList.add('fade-up--active');
                        this.observer!.unobserve(entry.target);
                    }, this.delay);   
                }
            });
        }
    }
});
</script>
  
<style scoped>
.fade-up {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease-in, transform 0.8s ease-in;
}

.fade-up--active {
    opacity: 1;
    transform: translateY(0);
}
</style>