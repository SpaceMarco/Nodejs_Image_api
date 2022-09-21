import express from 'express';
import Images from './api/Images';

const routes = express.Router();

routes.use('/images', Images);

routes.get('/', (req, res) => {
  res.status(200);
  res.send(
    'Welcome to the image processing api project try: /images?filename=fjord&width=100&height=100'
  );
});

export default routes;
