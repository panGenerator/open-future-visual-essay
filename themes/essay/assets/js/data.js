import * as random from 'canvas-sketch-util/random'
import { map } from '@pangenerator/utils'

const data = []
const seed = Math.round(Math.random() * 100000)
const maxLevel = 5
const noiseFrequency = 1000
random.setSeed(seed)


const divide = (R, vertical, ratio) => {
  return vertical
    ? [
      { x: R.x, y: R.y, width: R.width * ratio, height: R.height },
      { x: R.x + R.width * ratio, y: R.y, width: R.width * (1 - ratio), height: R.height }
    ]
    : [
      { x: R.x, y: R.y, width: R.width, height: R.height * ratio },
      { x: R.x, y: R.y + R.height * ratio, width: R.width, height: R.height * (1 - ratio) }
    ]
}

const subdivide = (R, level) => {
  const probability = 1 - R.x
  if (level < maxLevel) {
    const s1 = divide(R, true, 0.5)
    const s2a = divide(s1[0], false, 0.5)
    const s2b = divide(s1[1], false, 0.5)
    const subRects = [s2a[0], s2a[1], s2b[0], s2b[1]]
    if (random.value() < probability) {
      for (let i = 0; i < 4; i++) {
        subdivide(subRects[i], level + 1)
      }
    } else {
      addRect(R)
    }
  } else {
    addRect(R)
  }
}

const addRect = (R) => {
  const steps = 10
  const stepSize = R.width / steps
  for (let i = 0; i < steps; i++) {
    const color = ((random.noise2D(R.x, R.y, noiseFrequency) + 1) / 2 < 0.5) ? 255 * (i / steps) : 255 * (1 - (i / steps))
    const xpos = R.x + i * stepSize
    const accent = random.value() > R.x - 0.4
    if (xpos > 0.5) {
      data.push({ x: xpos, y: R.y, width: stepSize, height: R.height, color: color, accent })
    } else {
      const n = (random.noise2D(xpos, R.y, noiseFrequency * 0.1) + 1) / 2
      const m = map((1 - xpos), 0, 1, 0.1, 0.85)
      if (n > (1 - xpos) * m && xpos !== 0) {
        data.push({ x: xpos, y: R.y, width: stepSize, height: R.height, color: color, accent })
      }
    }
  }
}
subdivide({ x: 0, y: 0, width: 1, height: 1 }, 0)
export default data