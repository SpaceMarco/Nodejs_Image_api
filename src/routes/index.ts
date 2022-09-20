import express from 'express';
import Images from './api/Images';

const routes = express.Router();

routes.use('/images', Images);

routes.get('/', (req, res) => {
  res.send('api home');
});

export default routes;
