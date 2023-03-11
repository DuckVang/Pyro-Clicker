<script setup>
import Upgrade from './Upgrade.vue'
// export default {
//     components: {
//         Upgrade
//     }
// }
</script>
<template>
    <div class="store-upgrade">
        <div class="title">
            <h1>UPGRADES</h1>
            <p>cool upgrades</p>
        </div>
        <Upgrade></Upgrade>
        <Upgrade></Upgrade>
        <Upgrade></Upgrade>
        <Upgrade></Upgrade>
    </div>
</template>
<style scoped lang="scss">
@import "node_modules/pixel-borders/src/styles/pixel-borders.scss";

.store-upgrade {

    display: flex;
    flex-direction: column;
    background-color: $color1;
    height: 100vh;
    width: 100%;
    overflow: scroll;
    padding: 2px;

    .title {
        @include pixel-borders ($corner-size: 2,
            $border-size: 3px,
            $border-color: $border1,
            $border-inset-color: false);

        margin: 10px;
        padding: 10px;

        align-items: left;

        h1 {
            font-size: 2em;
            border-bottom: 2px dashed grey;
        }
    }
}
</style>
