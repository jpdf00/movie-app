import { rest } from 'msw';
import { setupServer } from 'msw/node';
import getData from '../Fetch/asyncFetch';
import { MOVIES, FAVOURITES } from './mockData';

const url1 = 'https://movies-api-jpdf00.herokuapp.com/movies';
const url2 = 'https://movies-api-jpdf00.herokuapp.com/favourites';

const server = setupServer(
  rest.get(url1, (req, res, ctx) => res(
    ctx.status(200),
    ctx.json(MOVIES),
  )),
  rest.get(url2, (req, res, ctx) => res(
    ctx.status(200),
    ctx.json(FAVOURITES),
  )),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Movies Data', () => {
  it('Should fetch the correct movies data', async () => {
    await getData(url1).then((resp) => resp.json()).then((res) => {
      expect(res).toEqual(MOVIES);
    });
  });

  it('Should not fetch the incorrect movies data', async () => {
    await getData(url1).then((resp) => resp.json()).then((res) => {
      expect(res).not.toEqual('Summary');
    });
  });
});

describe('Favourites Data', () => {
  it('Should fetch the correct favourites data', async () => {
    await getData(url2).then((resp) => resp.json()).then((res) => {
      expect(res).toEqual(FAVOURITES);
    });
  });

  it('Should not fetch the incorrect favourites data', async () => {
    await getData(url2).then((resp) => resp.json()).then((res) => {
      expect(res).not.toEqual('Brazil');
    });
  });
});
