import express from 'express';
import path from 'path';
import logger from '../../middleware/logger';
import { promises as fsPromises } from 'fs';
import sharp from 'sharp';
import { Console } from 'console';
import fs from 'fs';
import { resize_func } from '../../functions/func';

const Images = express.Router();

Images.get('/', logger, async (req, res) => {
  const name = req.query.filename as string;
  const imgloc = path.resolve(`assets/full/${name}.jpg`);
  const userwidth = parseInt(req.query.width as string);
  const userheight = parseInt(req.query.height as string);
  res.status(200);
  res.sendFile(await resize_func(name, imgloc, userwidth, userheight));
});

export default Images;
