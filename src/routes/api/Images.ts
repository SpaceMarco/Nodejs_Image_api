import express from 'express';
import path from 'path';
import logger from '../../middleware/logger';
import { promises as fsPromises } from 'fs';
import sharp from 'sharp';
import { Console } from 'console';

const Images = express.Router();

Images.get('/', logger, (req, res) => {
  const name = req.query.filename as string;
  const imgloc = path.resolve(`assets/full/${name}.jpg`);
  const userwidth = parseInt(req.query.width as string);
  const userheight = parseInt(req.query.height as string);
  const output = path.resolve(
    `assets/thumb/${name}(${userwidth}x${userheight}).jpg`
  );
  const outname = `${name}(${userwidth}x${userheight}).jpg`;

  (async function () {
    await sharp(imgloc)
      .resize({ height: userheight, width: userwidth })
      .toFile(output)
      .then(function (newFileInfo) {
        console.log('Success');
        res.sendFile(path.resolve(output));
      })
      .catch(function (err) {
        console.log('Error occured');
      });
  })();
});

const resized_img = async (
  inputPath: string,
  _width: number,
  _height: number,
  output: string
) => {
  try {
    await sharp(inputPath)
      .resize({
        width: _width,
        height: _height,
      })
      .toFile(path.resolve('./' + output));

    console.log('Successfully resized an image!');
    console.log(path.resolve('./' + output));
    return path.resolve('./' + output);
  } catch (err) {
    console.log(err);
  }
};

export default Images;
