<template>
    <div class="footer">
        
        <img src="/logo_cube.svg" alt="logo-footer" style="width: 60px; height: 60px;">
        <div>
            <p style="font-size: 12px; font-weight: 400;">© MARTIN STUDNA 2023 </p>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "Footer",
    components: {
    
    }
});
</script>
<style>

.footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 25px 15px;
}
    
/* .footer::before {
    top: 0px;
    left: 0px;
    width: 100%;
    height: 1px;
    opacity: 0.1;
    content: " ";
    display: block;
    position: absolute;
    background-color: rgb(7, 5, 18);
} */

</style>