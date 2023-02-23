<script>
export default {

}

</script>
<template>
    <button>
        <div class="container">
            pog
        </div>
    </button>
</template>
<style lang="scss" scoped>
button {
    font-family: "VT323";
    aspect-ratio: 1/1;
    width: 100%;
    border: 0;
    background-color: grey;
    
    padding: 10px;

    &:hover {
        background-color: black;
    }



    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        background-color: $color1;
        border: 5px dashed black;
    }
}
</style>
