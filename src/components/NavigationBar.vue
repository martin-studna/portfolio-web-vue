<template>
    <nav>
        <router-link to="/" v-on:click="hideMenu">
            <img style="max-width: 110px; max-height: 110px" src="../assets/logo_cube.svg" alt="navigation-bar-logo">
        </router-link>

        <div class="hamburger" @click="toggle">
            <div v-bind:class="line"></div>
            <div v-bind:class="line"></div>
            <div v-bind:class="line"></div>
        </div>
        <div v-bind:class="nav">
            <ul>
                <li v-bind:class="fade">
                    <router-link to="/" v-on:click="toggle">Home</router-link>
                </li>
                <li v-bind:class="fade">
                    <router-link to="/blog" v-on:click="toggle">Blog</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent( {
    name: "NavigationBar",
    data() {
        return {
            nav: "nav-links",
            line: "line",
            fade: ""
        }
    },
    methods: {
        toggle() {
            if (this.nav === "nav-links") {
                this.nav = "nav-links open";
                this.line = "line open";
                document.body.style.overflowY = "hidden";
                this.fade = "fade";
                } else {
                this.line = "line";
                this.fade = "";
                this.nav = "nav-links";
                document.body.style.overflow = "auto";
            }
        },
        hideMenu() {
            this.nav = "nav-links";
            document.body.style.overflowY = "hidden";
        }
    }
});
</script>
<style>
    
</style>