<script>
import Upgerade from './Upgrade.vue'
export default {
    components: {
        Upgerade
    }
}
</script>
<template>
    <div class="store-upgrade">
        <h1>Upgrades</h1>
        <Upgerade></Upgerade>
        <Upgerade></Upgerade>
        <Upgerade></Upgerade>
        <Upgerade></Upgerade>
    </div>
</template>
<style scoped lang="scss">
.store-upgrade {
   
    display: flex;
    flex-direction: column;
    background-color: $color1;
    height: 100vh;
    width: 100%;
    overflow: scroll;


}
</style>
