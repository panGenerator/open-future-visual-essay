import { Alert, Toast } from 'bootstrap' // eslint-disable-line no-unused-vars
console.log('🤡')

document.addEventListener("scroll",
  function() {
    let y = document.documentElement["scrollTop"] || document.body["scrollTop"];
    let height = (document.documentElement["scrollHeight"] || document.body["scrollHeight"]) - document.documentElement.clientHeight;
    let pos = y / height * 100 + "%";
    console.log(pos)
    document.getElementById("progress_bar").style.setProperty("--scroll", pos);
  },
  { passive: true }
);