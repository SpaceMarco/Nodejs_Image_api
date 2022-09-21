import express, { Router, Response, Request } from 'express';
import Images from './api/Images';

const routes: Router = express.Router();

routes.use('/images', Images);

routes.get('/', (req: Request, res: Response) => {
  res.status(200);
  res.send(
    'Welcome to the image processing api project try: /images?filename=fjord&width=100&height=100'
  );
});

export default routes;
