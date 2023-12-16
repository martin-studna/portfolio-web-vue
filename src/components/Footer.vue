<template>
    <div class="footer">
        
        <img src="/logo_cube.svg" alt="logo-footer" style="width: 60px; height: 60px;">
        <div>
            <p style="font-size: 12px; font-weight: 400;">© MARTIN STUDNA {{ new Date().getFullYear() }} </p>
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
    

</style>