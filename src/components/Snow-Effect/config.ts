const snowConfig = {
    // The background color is for making the particles visible since they're white. Remove this section if not needed
    background:{
       "opacity": 0
    },
    // The particles options
    particles:{
       // The color of the particles/snowflakes
       "color":{
          "value":"#fff"
       },
       // Move the snow flakes to bottom for a realistic effect, "out" in outModes is for making them reappear on top once exited at the bottom of the page, the speed should be slow for a realistic effect
       "move":{
          "direction":"bottom",
          "enable":true,
          "outModes":"out",
          "speed":20
       },
       // How many particles/snowflakes will be created when starting the effect, density is a good option to enable since it calculates the particles number based on the screen size (mobile users will be happy)
    //    "number":{
    //       "density":{
    //          "enable":true,
    //          "area":800
    //       },
    //       "value":400
    //    },
       // The opacity of the particles/snowflakes
       "opacity":{
          "value":0.4
       },
       // The shape of the particles/snowflakes, also custom shapes can be used, this will be discussed at the end
       "shape":{
          "type":"square"
       },
       // The size of the particles/snowflakes
       "size":{
          "value":5
       },
       // A nice wobble movement
       "wobble":{
          "enable":true,
          "distance":10,
          "speed":10
       },
       // Some depth to the effect, (the layers count by default is 100, changing max here is not affecting that count)
       // The zIndex will affect speed, size and opacity of the particles/snowflakes, the smaller the zIndex the smaller/more transparent/slower the particles/snowflakes will be
       "zIndex":{
          "value":{
             "min":0,
             "max":100
          }
       }
    }
 }

export default snowConfig