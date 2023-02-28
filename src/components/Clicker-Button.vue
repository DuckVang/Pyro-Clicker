<script>
export default {

}

</script>
<template>
    <button>
        <div class="container">
            <img src="../assets/log.png" alt="">
        </div>
    </button>
</template>
<style lang="scss" scoped>
button {
    font-family: "VT323";
    aspect-ratio: 1/1;
    max-width: 100%;
    border: 0;
    background-color: rgba(174, 155, 113, 0.857);

    padding: 10px;

    &:hover {
        background-color: black;
    }

    &:active {
        margin: 10px;

        .container {

            img {
                transition: 0.3s;
                rotate: (360deg);
                width: 1px;
                height: 1px;

            }
        }
    }


    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        background-color: $color1;
        border: 5px dashed black;

        img {
            filter: drop-shadow(0 0 0.75rem black);
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
</style>
