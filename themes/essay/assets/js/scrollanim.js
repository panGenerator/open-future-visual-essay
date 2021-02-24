import { map } from '@pangenerator/utils'
import { quadIn } from 'eases'
export default class ScrollAnim {
  constructor() {
    this.elements = []
  }
  update(){
    this.elements.forEach(item => {
      let vis = this.getVisibility(item)
      if(item.mode=='TWEEN'){
        if(vis < item.visibility[0]) {
          item.element.style[item.property] = item.values[0]
        }
        else if(vis >= item.visibility[0] && vis <= item.visibility[1]) {
          item.element.style[item.property] = map(vis, item.visibility[0], item.visibility[1], item.values[0], item.values[1])
        }
        else if(vis > item.visibility[1]){
          item.element.style[item.property] = item.values[1]
        }
      } else if(item.mode == 'ANIMATION') {
        if(vis > item.visibility[0] || vis < item.visibility[item.visibility.length-1]) {
        let id = item.visibility.reduce((prev, curr) => Math.abs(curr - vis) < Math.abs(prev - vis) ? curr : prev);
        console.log(id)
        //
          item.element.style.animation = item.animation[item.visibility.indexOf(id)]
        }
        // }
        // else{
        //   item.element.style.animation = item.animation[0]
        // }
      }
      console.log(vis)
    });
  }
  add (item) {
    console.log(this.elements)
    this.elements.push(item)
  }
  getVisibility(item) {
    const { top, height } = item.element.getBoundingClientRect();
    const current = window.innerHeight - top;
    const max = window.innerHeight + height;
    return current / max;
  }
}