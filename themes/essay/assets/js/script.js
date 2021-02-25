import { create } from '@lottiefiles/lottie-interactivity'
import AOS from 'aos'

AOS.init();

document.addEventListener("DOMContentLoaded",function(){

console.log('🤡')

document.addEventListener("scroll", () => {
    let y = document.documentElement["scrollTop"] || document.body["scrollTop"];
    let height = (document.documentElement["scrollHeight"] || document.body["scrollHeight"]) - document.documentElement.clientHeight;
    let pos = y / height * 100 + "%";
    //console.log(pos)
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
      visibility: [0.4,0.6],
      type: "seek",
      frames: [0, 64]
    }
  ]
});


  //here code
});