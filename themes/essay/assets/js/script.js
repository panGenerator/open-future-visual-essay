// import { Alert, Toast } from 'bootstrap' // eslint-disable-line no-unused-vars
//import * as player from '@lottiefiles/lottie-player'
//import { create } from '@lottiefiles/lottie-interactivity'

// import bodymovin from 'lottie-web'
console.log('🤡')


document.addEventListener("scroll",
  function() {
    let y = document.documentElement["scrollTop"] || document.body["scrollTop"];
    let height = (document.documentElement["scrollHeight"] || document.body["scrollHeight"]) - document.documentElement.clientHeight;
    let pos = y / height * 100 + "%";
    //console.log(pos)
    document.getElementById("progress_bar").style.setProperty("--scroll", pos);
  },
  { passive: true }
);

// var animation = bodymovin.loadAnimation({
//   container: document.getElementById('lottie'),
//   renderer: 'svg',
//   loop: true,
//   autoplay: true,
//   path: '/animation/data.json'
// })

LottieInteractivity.create({
  mode:"scroll",
  player:'#firstLottie',
  actions: [
    {
      visibility: [0,1],
      type: "seek",
      frames: [0, 300]
    }
  ]
});