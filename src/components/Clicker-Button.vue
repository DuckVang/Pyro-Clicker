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
    background-color: $color1;

    padding: 10px;
    
    


    &:hover {
        background-color: red($color: #000000);
    }

    &:active {
      

        .container {


            
            img {
                transition: 0.1s;
                rotate: (10deg);
               scale: 1.4;

            }
        }
    }


    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        background-color: #988a6a;
        border: 5px dashed $border1;
        padding: 20px;

        background-color: $color1;
        background-image: url("https://www.transparenttextures.com/patterns/3px-tile.png");

        img {
            filter: grayscale(100%);
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
</style>
