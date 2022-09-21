import path from 'path';
import fs from 'fs';
import sharp from 'sharp';

export const resize_func = async (
  name: string,
  imgloc: string,
  userheight: number,
  userwidth: number
) => {
  if (
    userheight > 2000 ||
    userheight < 0 ||
    (userwidth > 2000 && userwidth < 0)
  ) {
    return 'NaN';
  }

  const output = path.resolve(
    `assets/thumb/${name}(${userwidth}x${userheight}).jpg`
  );

  if (checkPath(output)) {
    console.log('image already exists!');
    return output;
  }

  await sharp(imgloc).resize(userheight, userwidth).toFile(output);
  return path.resolve(output);
};

export const checkPath = (inputpath: string): boolean => {
  return fs.existsSync(inputpath);
};

// const request = supertest(Images);
// async ()=>{

//   const response = await request.get('/');
//   console.log('>>>the status is: ', response.status);
// }

export const checkNumber = (inputdata: number): boolean => {
  if (inputdata < 2000 && inputdata > 0) {
    return true;
  } else {
    return false;
  }
};
