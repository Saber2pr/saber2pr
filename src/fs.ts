import fs from 'fs';
import { promisify } from 'util';

const mkdir = promisify(fs.mkdir)

export const mkDirPath = async (path: string): Promise<void> => {
  if (fs.existsSync(path)) {
    return
  } else {
    await mkdir(path)
  }
}
