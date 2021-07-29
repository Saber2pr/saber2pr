import axios from 'axios';
import { join } from 'path';

import { generateChartFile } from './chart';
import { createCurveOps } from './draw-curve';
// import { createPieOps } from './draw-pie';
import { mkDirPath } from './fs';

const dataUrl = 'https://raw.githubusercontent.com/Saber2pr/saber2pr.github.io/master/static/data/blog.json'

const outDir = join(process.cwd(), 'out')

async function main() {
  const res = await axios.get(dataUrl)
  const data = res.data
  await mkDirPath(outDir)
  // generateChartFile({ w: 500, h: 500 }, createPieOps(data), join(outDir, 'pie.svg'))
  generateChartFile({ w: 1000, h: 400 }, createCurveOps(data), join(outDir, 'curve.svg'))
}

main()
