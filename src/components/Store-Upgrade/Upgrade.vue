
<script>

export default {
    data() {
        return {

        }
    }

}
</script>
<template>
    <div class="upgrade">
        <div class="icon">>]</div>
        <div class="text">
            Upgrade
        </div>
    </div>
</template>

<style scoped lang="scss">
.upgrade {
    
    margin-top: 10px;
    padding: 14px;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 8vh;
    background-color: darken($color1, 10);
    border-radius: 1px solid black;
    align-items: center;
}

.icon {
    flex: 1;
    aspect-ratio: 1/1;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px dashed black;
}

.text {
    flex: 7;
    font-size: 1.5em;
    margin-left: 20px;

}
</style>
