import * as d3 from "d3";
import data from './data'

console.log('🤠')
// console.table(data)
// console.log(d3)

function arc () {
  const inner = 136/2
  const outer = 240/2
  const diff = outer - inner
  return d3.arc()
    .startAngle(d => d.x * Math.PI * 2 - 0.005)
    .endAngle(d => (d.x + d.width) * Math.PI * 2)
    .innerRadius(d => inner + d.y * diff)
    .outerRadius(d => inner + (d.y + d.height) * diff + 0.55)
}

const colorScale = () => {
  return d3.scaleLinear()
    .domain([0, 255])
    .range([color(120), color(24)])
}

const color = (val) => {
  return '#' + val.toString(16) + val.toString(16) + val.toString(16)
}

d3.select('svg#logo')
  .select('g#icon')
  .attr('transform','translate(125,125),rotate(-90)')
  .transition().delay(200).duration(2000).ease(d3.easeQuadInOut)
  .attr('transform','translate(125,125),rotate(90)')

//document.addEventListener("DOMContentLoaded",function() {
d3.select('svg#logo')
  .select('g#icon')
  .selectAll('path')
  .data(data)
  .enter()
  .append('path')
  .attr('opacity',0)
  .attr('transform',d=>`translate(${Math.random()*100-50},${Math.random()*100-50})`)
  .transition().duration(100).delay((d,i)=>200+(d.x)*2000).ease(d3.easeQuadInOut)
  .attr('opacity', 1)
  .attr('transform','translate(0,0)')
  .attr('d', arc())
  .attr('fill', d => d.accent ? colorScale()(d.color) : "#fdf151")
//})


