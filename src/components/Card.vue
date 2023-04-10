<template>
    <div v-bind:class="className">
            <div class="cardContent">
                <div class="cardHeader">
                    <img class="cardImage" :src="imageSrc" v-bind:alt='company'>
                    <div class="cardHeaderMain">
                        <div class="cardHeaderTitle">{{title}}</div>
                        <div class="cardHeaderCompany">{{company}}</div>
                        <div class="cardHeaderPlace">{{place}}</div>
                    </div>
                    <div class="cardHeaderDate">{{date}}</div>
                </div>
                <hr class="cardTitle" />
                <div class="cardText">
                    <slot></slot> 
            </div>
            </div>
        </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        imageSrc: {
            type: String,
            required: true,
        },
        className: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        company: {
            type: String,
            required: true,
        },
        place: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
    },
    methods: {
        
    },
}); 
</script>
<style>
.cardContent {
    margin: 1.5rem;
    text-align: left;
}

.cardText {
    margin-top: 1rem;
    display: flex;
    justify-content: flex-start;
    text-align: start;
}

.cardHeader {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 1rem;

}

.cardImage {
    width: 50px;
    height: 50px;
}

.cardHeaderTitle {
    font-weight: bold;
}

.cardHeaderMain {
    margin-left: 1rem;

}

.cardHeaderCompany {
    margin-top: 2px;
    font-size: 14px;
}

.cardHeaderPlace {
    margin-top: 0px;

    color: var(--gray);
    font-size: 14px;
}

.cardHeaderDate {
    margin-left: auto;
    color: var(--gray);
    font-size: 14px;
    align-self: flex-start;
}

.cardLine {
    border: 0.05rem solid rgba(0, 0, 0, 0.1);
}
</style>