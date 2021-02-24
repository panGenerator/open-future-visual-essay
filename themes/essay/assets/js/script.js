import { create } from '@lottiefiles/lottie-interactivity'
import AOS from 'aos'

console.log(AOS)
document.addEventListener("DOMContentLoaded",function(){
  AOS.init();
console.log('🤡')
// init controller

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
  player:'#firstLottie',
  actions: [
    {
      visibility: [0.3,1],
      type: "seek",
      frames: [0, 66]
    }
  ]
});

create({
  mode:"scroll",
  player:'#secondLottie',
  actions: [
    {
      visibility: [0,1],
      type: "seek",
      frames: [0, 179]
    }
  ]
});


  //here code
});