import supertest from 'supertest';
import Images from '../routes/api/Images';
import routes from '../routes';
import app from '../main';
import { resize_func, checkPath, checkNumber } from '../functions/func';

const request = supertest(app);

const validPath = './assets/full/fjord.jpg';
const invalidPath = './assets/full/jfordxxza.jpg';

describe('Test endpoint responses', (): void => {
  it('checks api endpoint', async (): Promise<void> => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
    // done();
  });

  it('checkPath checks if path is valid', (): void => {
    expect(checkPath(validPath)).toBe(true);
    expect(checkPath(invalidPath)).toBe(false);
  });

  it('checkPath checks if number is valid [0<num>2000]', (): void => {
    expect(checkNumber(3000)).toBe(false);
    expect(checkNumber(-1)).toBe(false);
    expect(checkNumber(100)).toBe(true);
    expect(checkNumber(500)).toBe(true);
  });

  it('checks if path is valid but size is wrong, will = false', async (): Promise<void> => {
    const res = await resize_func('fjord', validPath, -1, 3000);
    expect(checkPath(res)).toBeFalsy();
  });

  it('checks if size is valid but path is wrong, will = false', async (): Promise<void> => {
    const res = await resize_func('fjordzzz', invalidPath, 100, 100);
    expect(checkPath(res)).toBeFalsy();
  });
});
