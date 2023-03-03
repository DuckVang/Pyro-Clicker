<script>
export default {

}

</script>
<template>
    <div class="clicker">



        <button>
            <div class="container">
                <img src="../assets/log.png" alt="">
            </div>
        </button>
    </div>
</template>
<style lang="scss" scoped>
.clicker{

    background-color: black;
   
}
button {
    font-family: "VT323";
    aspect-ratio: 1/1;
   
    max-width: 100%;
    border: 0;
    background-color: rgba(174, 155, 113, 0.857);

    padding: 10px;
    
    


    &:hover {
        background-color: red($color: #000000);
    }

    &:active {
      

        .container {


            
            img {
                transition: 0.3s;
                rotate: (360deg);
               scale: 0;

            }
        }
    }


    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        background-color: #988a6a;
        border: 5px dashed black;
        padding: 20px;

        background-color: #988a6a;
        background-image: url("https://www.transparenttextures.com/patterns/3px-tile.png");

        img {
            filter: drop-shadow(0 0 0.75rem black);
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
</style>
