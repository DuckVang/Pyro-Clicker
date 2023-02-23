<script>

import { Application, Graphics } from "pixi.js";

let pixiApp = new Application()


pixiApp.stage.addChild(new Graphics().beginFill(0x00E200).drawRect(0, 0, 100, 100).endFill())


export default {
    data() {
        return {
            pixiApp: pixiApp,

        }
    },
    mounted() {
        this.$el.appendChild(this.pixiApp.view)
        console.log(this.$el)

        window.addEventListener('resize', this.resize);
        this.resize();
        console.log(this.$el)
    },
    methods: {
        resize() {
            const parent = this.pixiApp.view.parentNode;
            console.log(parent)
            console.log(parent.clientWidth, parent.clientHeight)
            pixiApp.renderer.resize(parent.clientWidth, parent.clientHeight);

        }
    }


}


</script>
<template>
    <div id="Pixi-App">

    </div>
</template>

<style lang="scss">
#Pixi-App{

    flex: 2;
    background-color: black;
    &>canvas{
       
    }
}
</style>
