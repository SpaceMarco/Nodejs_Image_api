import express from 'express';
// import sharp from 'sharp';
// import path from 'path';

// const resizer = async (
//   req: express.Request,
//   res: express.Response,
//   next: () => void
// ): Promise<string> => {
//   const name = req.query.filename as string;
//   const imgloc = path.resolve('../') + `/routes/api/full/${name}.jpg`;
//   const _width = req.query.width as unknown as number;
//   const _height = req.query.height as unknown as number;

//   await sharp(imgloc)
//     .resize({
//       width: _width,
//       height: _height,
//     })
//     .toFile(path.resolve('../') + `/src/routes/api/thumb/${name}.jpg`);

//   const url = req.url;
//   console.log(`${url} was visited`);
//   return path.resolve('../') + `/src/routes/api/thumb/${name}.jpg`;
// };

const logger = (
  req: express.Request,
  res: express.Response,
  next: () => void
): void => {
  const url = req.url;
  console.log(`${url} was processed`);
  next();
};

export default logger;
