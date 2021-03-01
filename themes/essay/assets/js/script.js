import { create } from './lottie-interactivity'
import AOS from 'aos'

AOS.init();

document.addEventListener("DOMContentLoaded",function(){

console.log('🤡')
//let closedSharing = document.getElementById("closedSharing").getLottie()

//const { top, height } = document.getElementById("closedSharing").getBoundingClientRect();
//console.log(closedSharing, top, height)
//closedSharing.posY = top+800

document.addEventListener("scroll", () => {
    let y = document.documentElement["scrollTop"] || document.body["scrollTop"];
    let height = (document.documentElement["scrollHeight"] || document.body["scrollHeight"]) - document.documentElement.clientHeight;
    let pos = y / height * 100 + "%";
    //console.log(y)
    // if(y > closedSharing.posY){
    //   closedSharing.playSegments(28, true);
    // }
    document.getElementById("progress_bar").style.setProperty("--scroll", pos);
  },
  { passive: true }
);

create({
  mode:"scroll",
  player:'#boxAnim',
  actions: [
    {
      visibility: [0.3,1],
      type: "seek",
      frames: [0, 60]
    }
  ]
});

create({
  mode:"scroll",
  player:'#yochai',
  actions: [
    {
      visibility: [0.0,0.5],
      type: "seek",
      frames: [0, 64]
    }
  ]
});

create({
  mode:"scroll",
  player:'#sharingPlatforms',
  actions: [
    {
      visibility: [0.35,0.5],
      type: "seek",
      frames: [0, 28]
    }
  ]
});

create({
  mode:"scrollOnce",
  player:'#closedSharing',
  actions: [
    {
      visibility: [0.2,0.8],
      type: "play",
      frames: [0, 83]
    }
  ]
});

create({
  mode:"scroll",
  player:'#lessing',
  actions: [
    {
      visibility: [0.0,0.5],
      type: "seek",
      frames: [0, 64]
    }
  ]
});

});