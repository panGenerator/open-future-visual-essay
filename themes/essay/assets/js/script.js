import { create } from './lottie-interactivity'
import AOS from 'aos'

document.addEventListener("DOMContentLoaded",function(){

  document.addEventListener("scroll", () => {
      let y = document.documentElement["scrollTop"] || document.body["scrollTop"];
      let height = (document.documentElement["scrollHeight"] || document.body["scrollHeight"]) - document.documentElement.clientHeight;
      let pos = y / height * 100 + "%";

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
        visibility: [0.3,0.5],
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
        visibility: [0.2,0.5],
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
    player:'#lessig',
    actions: [
      {
        visibility: [0.3,0.5],
        type: "seek",
        frames: [0, 64]
      }
    ]
  });
  create({
    mode:"scroll",
    player:'#newOpen',
    actions: [
      {
        visibility: [0.2,0.7],
        type: "seek",
        frames: [0, 64]
      }
    ]
  });
  create({
    mode:"scroll",
    player:'#euFlag',
    actions: [
      {
        visibility: [0.3,0.5],
        type: "seek",
        frames: [0, 55]
      }
    ]
  });
  create({
    mode:"scroll",
    player:'#euFlagXL',
    actions: [
      {
        visibility: [0.3,0.5],
        type: "seek",
        frames: [0, 55]
      }
    ]
  });
  setTimeout(()=>{AOS.init();}, 500)

});