import express, { Application, Response, Request } from 'express';
import routes from './routes/';

const app: Application = express();
const port = 5500;

app.use('/api', routes);

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('home page');
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
