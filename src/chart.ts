import Canvas from 'canvas';
import * as echarts from 'echarts';
import fs from 'fs';
import { JSDOM } from 'jsdom';

const getChartSVG = ({ w, h }, option) => {
  echarts.setCanvasCreator(() => {
    return Canvas.createCanvas(100, 100) as any
  })

  const { window } = new JSDOM()
  global.window = window as any
  global.navigator = window.navigator
  global.document = window.document

  const root = document.createElement('div')
  root.style.cssText = `width: ${w}px; height: ${h}px;`

  const chart = echarts.init(root, null, {
    renderer: 'svg',
  })

  chart.setOption(option)

  const chartSvg = root.querySelector('svg').outerHTML
  chart.dispose()

  return chartSvg
}

export const generateChartFile = ({ w, h }, ops: any, outPath: string) => {
  const svg = getChartSVG({ w, h }, ops)
  fs.writeFileSync(outPath, svg)
}
