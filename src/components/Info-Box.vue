<script>

export default {
  data () {
    return {
      date: new Date().toString()
    }
  }
}
</script>

<template>
    <div class="Info-Box">
        <h1>Fire clicker</h1>

        <h4 class="date">{{ date }}</h4>

        <h3 class="unit">XXX</h3>
    </div>
</template>

<style lang="scss">

.Info-Box {
    width: 100%;
    max-height: 250px;
    background-color: $color1;

    &>* {
        margin: 0;
    }

    h1 {
        border-bottom: 1px solid $border1;
    }

    h2 {}

    .unit {

        font-size: 3em;
    }
}
</style>
