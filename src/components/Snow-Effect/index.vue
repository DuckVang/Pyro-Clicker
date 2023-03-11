<script setup>
import Snowflake from "./Snowflake.ts";

let snowflakes = [];

let browserWidth;
let browserHeight;

let numberOfSnowflakes = 500;
let acl = 400;
let minAcl = 100

let resetPosition = true;

let reduceMotionQuery = matchMedia("(prefers-reduced-motion)");

let enableAnimations = true;
// Handle animation accessibility preferences
function setAccessibilityState() {
  if (reduceMotionQuery.matches) {
    enableAnimations = false;
  } else {
    enableAnimations = true;
  }
}
setAccessibilityState();

reduceMotionQuery.addListener(setAccessibilityState);

function setup() {
  if (enableAnimations) {
    window.addEventListener("DOMContentLoaded", generateSnowflakes, false);
    window.addEventListener("resize", setResetFlag, false);
  }
}

setup();

function generateSnowflakes() {
  // get our snowflake element from the DOM and store it
  let originalSnowflake = document.querySelector(".snowflake");

  // access our snowflake element's parent container
  let snowflakeContainer = originalSnowflake.parentNode;
  snowflakeContainer.style.display = "block";

  // get our browser's size
  browserWidth = document.documentElement.clientWidth;
  browserHeight = document.documentElement.clientHeight;

  // create each individual snowflake
  for (let i = 0; i < numberOfSnowflakes; i++) {
    // clone our original snowflake and add it to snowflakeContainer
    let snowflakeClone = originalSnowflake.cloneNode(true);
    snowflakeContainer.appendChild(snowflakeClone);

    // set our snowflake's initial position and related properties
    let initialXPos = getPosition(50, browserWidth);
    let initialYPos = getPosition(50, browserHeight);
    let speed = (minAcl  + Math.random() * acl) * delta;

    // create our Snowflake object
    let snowflakeObject = new Snowflake(snowflakeClone, speed, initialXPos, initialYPos);
    snowflakes.push(snowflakeObject);
  }

  // remove the original snowflake because we no longer need it visible
  snowflakeContainer.removeChild(originalSnowflake);

  requestAnimationFrame(moveSnowflakes);
}

let frames_per_second = 60;
let frame_interval = 1000 / frames_per_second;

let previousTime = performance.now();
let delta = 1;

function moveSnowflakes(currentTime) {
  delta = (currentTime - previousTime) / frame_interval;

  if (enableAnimations) {
    for (let i = 0; i < snowflakes.length; i++) {
      let snowflake = snowflakes[i];
      snowflake.update(delta, browserHeight);
    }
  }

  previousTime = currentTime;

  // Reset the position of all the snowflakes to a new value
  if (resetPosition) {
    browserWidth = document.documentElement.clientWidth;
    browserHeight = document.documentElement.clientHeight;

    for (let i = 0; i < snowflakes.length; i++) {
      let snowflake = snowflakes[i];

      snowflake.xPos = getPosition(50, browserWidth);
      snowflake.yPos = getPosition(50, browserHeight);
    }

    resetPosition = false;
  }

  requestAnimationFrame(moveSnowflakes);
}

function getPosition(offset, size) {
  return Math.round(-1 * offset + Math.random() * (size + 2 * offset));
}

function setResetFlag(e) {
  resetPosition = true;
}
</script>

<template>
  <div id="snowflake-container">
    <div class="snowflake"></div>
  </div>
</template>
<style lang="scss" scoped>
#snowflake-container {
  position: absolute;
  left: 0px;
  top: 0px;
  display: none;

  .snowflake {
    position: fixed;
    background-color: #ffffff;
    user-select: none;
    z-index: 1000;
    pointer-events: none;

    width: 5px;
    height: 5px;
  }
}
</style>
