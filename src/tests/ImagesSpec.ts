import supertest from 'supertest';
import Images from '../routes/api/Images';
import routes from '../routes';
import { resize_func, checkPath, checkNumber } from '../functions/func';

const request = supertest(Images);

const validPath = './assets/full/fjord.jpg';
const invalidPath = './assets/full/jfordxxza.jpg';

describe('Test endpoint responses', () => {
  it('checks api endpoint', async (done : DoneFn) => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
    done();
  });

  it('checkPath checks if path is valid', () => {
    expect(checkPath(validPath)).toBe(true);
    expect(checkPath(invalidPath)).toBe(false);
  });

  it('checks if path is valid but size is wrong will = false', async () => {
    const res = await resize_func('fjord', validPath, -1, 3000);
    expect(checkPath(res)).toBeFalsy();
  });
});
