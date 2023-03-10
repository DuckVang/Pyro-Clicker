<script>
export default {
  data() {
    return {};
  },
};
</script>
<template>
  <div class="upgrade">
    <div class="icon">>]</div>
    <div class="text">Upgrade</div>
  </div>
</template>

<style scoped lang="scss">
@import "node_modules/pixel-borders/src/styles/pixel-borders.scss";

.upgrade {
  margin-top: 10px;
  padding: 14px;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 8vh;
  background-color: darken($color1, 10);
  border: 1px dashed $border1;
  
  align-items: center;
  &:active {
    scale: 0.9;

  }
}

.icon {
  flex: 1;
  aspect-ratio: 1/1;
  display: flex;
  align-items: center;
  justify-content: center;
  @include pixel-borders(
    $corner-size: 2,
    $border-size: 2px,
    $border-color: darken($border1, 20),
    $border-inset-color: false
  );
}

.text {
  flex: 7;
  font-size: 1.5em;
  margin-left: 20px;
}
</style>
