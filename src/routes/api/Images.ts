import express from 'express';
import path from 'path';
import logger from '../../middleware/logger';
import { promises as fsPromises } from 'fs';
import sharp from 'sharp';
import { Console } from 'console';
import fs from 'fs';
import { resize_func, checkPath, checkNumber } from '../../functions/func';

const Images = express.Router();

Images.get('/', logger, async (req, res) => {
  const name = req.query.filename as string;
  const imgloc = path.resolve(`assets/full/${name}.jpg`);
  const userwidth = parseInt(req.query.width as string);
  const userheight = parseInt(req.query.height as string);
  if (checkPath(imgloc)) {
    if (checkNumber(userwidth) && checkNumber(userheight)) {
      res.status(200);
      res.sendFile(await resize_func(name, imgloc, userwidth, userheight));
    } else {
      res.status(400);
      res.send('please insert a valid width and height');
    }
  } else {
    res.status(400);
    res.send('sorry picture not found');
  }
});

export default Images;
