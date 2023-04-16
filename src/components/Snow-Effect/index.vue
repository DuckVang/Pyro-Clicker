<script setup>
import { useStatStore } from "../../stores/stat";
import { storeToRefs } from "pinia";
import snowConfig from "./config";
import { loadFull } from "tsparticles";

// let enableAnimations = true;

// let snowflakes = [];

// let browserWidth;
// let browserHeight;

const { snowFlakes } = storeToRefs(useStatStore());

// let acl = 400;
// let minAcl = 100;

// let resetPosition = true;

const particlesInit = async (engine) => {
  await loadFull(engine);
};

const particlesLoaded = async (container) => {
  console.log("Particles container loaded", container);
};
</script>

<template>
  <Particles
    id="tsparticles"
    :particlesInit="particlesInit"
    :particlesLoaded="particlesLoaded"
    :options="{
      background: { ...snowConfig.background },
      particles: {
        ...snowConfig.particles,
        number: {
          density: {
            enable: true,
            area: 300,
          },
          value: snowFlakes,
        },

      },

    }"
    
  />
</template>
<style lang="scss" scoped></style>
