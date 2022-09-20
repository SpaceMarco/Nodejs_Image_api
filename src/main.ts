import express from 'express';
import routes from './routes/';
import Images from './routes/api/Images';

const app = express();
const port = 5500;

app.use('/api', routes);
// app.use('/teachers', teachers);
// app.use('/Images', Images);

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});