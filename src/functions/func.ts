import path from 'path';
import fs from 'fs';
import sharp from 'sharp';

export const resize_func = async (
  name: string,
  imgloc: string,
  userheight: number,
  userwidth: number
) => {
  const output = path.resolve(
    `assets/thumb/${name}(${userwidth}x${userheight}).jpg`
  );
  await sharp(imgloc).resize(userheight, userwidth).toFile(output);
  return path.resolve(output);
};

export const checkPathexist = (path: string): boolean => {
  return fs.existsSync(path);
};
