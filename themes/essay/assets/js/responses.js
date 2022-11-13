import { map, clamp } from '@pangenerator/utils'

document.addEventListener("DOMContentLoaded", function () {

  let container = document.getElementById('covers')
  let covers = document.querySelectorAll('.cover')
  // console.log(covers)
  let mtop = parseInt(window.getComputedStyle(container, null).getPropertyValue('padding-top'))
  let mbottom = parseInt(window.getComputedStyle(container, null).getPropertyValue('padding-bottom'))
  // console.log(mtop, mbottom)
  let margins = mtop + mbottom
  let wHeight = window.innerHeight
  let center = wHeight / 2
  let height = covers[0].getBoundingClientRect().height
  let maxImgHeight = covers[0].getBoundingClientRect().height*0.5
  let minImgHeight = covers[0].getBoundingClientRect().height/4

  //console.log('height:' + window.innerHeight)
  //console.log(center)
  //console.log(margins)
  //console.log('maxImgHeight:' + maxImgHeight)

  covers.forEach(cover => {
    let top = cover.getBoundingClientRect().top
    let pos = top + height / 2
    cover.style.opacity = clamp(map(pos, 0, center, 0, 1), 0, 1)
    let image = cover.querySelector('img')
    image.height = clamp(map(pos, wHeight, center, minImgHeight, maxImgHeight), minImgHeight, maxImgHeight)
  })

  document.addEventListener("scroll", () => {
    let y = document.documentElement["scrollTop"] || document.body["scrollTop"];
    let total = (document.documentElement["scrollHeight"] || document.body["scrollHeight"]) - document.documentElement.clientHeight;
    // console.log(y/total)

    //console.log('top:' + covers[0].getBoundingClientRect().top)
    //console.log('height:' + covers[0].getBoundingClientRect().height)
    //console.log('offset:'+ covers[0].offsetTop)

    covers.forEach(cover => {
      let top = cover.getBoundingClientRect().top
      let pos = top + height / 2
      cover.style.opacity = clamp(map(pos, 0, center, 0, 1), 0, 1)
      let image = cover.querySelector('img')
      image.height = clamp(map(pos, wHeight, center, minImgHeight,maxImgHeight), minImgHeight, maxImgHeight)
    })
  },
    { passive: true }
  );
});