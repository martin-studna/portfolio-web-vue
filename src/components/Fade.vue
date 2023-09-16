<template>
    <div class="fade" ref="fade">
        <slot></slot>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Fade",
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

        this.observer.observe(this.$refs.fade as Element);
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
                        entry.target.classList.add('fade--active');
                        this.observer!.unobserve(entry.target);
                    }, this.delay);   
                }
            });
        }
    }
});
</script>
  
<style scoped>
.fade {
    opacity: 0;
    transition: opacity 0.8s ease-in;
}

.fade--active {
    opacity: 1;
}
</style>