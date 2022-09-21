import supertest from 'supertest';
import Images from '../routes/api/Images';
import routes from '../routes';

const request = supertest(Images);

describe('Test endpoint responses', () => {
  it('gets the api endpoint', async (done) => {
    const response = await request.get('/images');
    expect(response.status).toBe(200);
    done();
  });
});
