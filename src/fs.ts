import fs, { readFileSync, writeFileSync } from 'fs';
import { promisify } from 'util';

const mkdir = promisify(fs.mkdir)

export const mkDirPath = async (path: string): Promise<void> => {
  if (fs.existsSync(path)) {
    return
  } else {
    await mkdir(path)
  }
}

export const updateHash = (path: string) => {
  const content = readFileSync(path).toString()
  writeFileSync(path, content.replace(/_ts=\d+/g, `_ts=${Date.now()}`))
}