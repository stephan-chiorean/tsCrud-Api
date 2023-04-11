import request from 'supertest';

import app from '../../app';

describe('GET /api/v1/todos', () => {
  it('responds with an array of Todo objects', async() => {
    await request(app)
      .get('/api/v1/todos')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).toHaveProperty('length');
        expect(res.body.length).toBe(5);
        expect(res.body[0]).toHaveProperty('content')
        expect(res.body[0]).toHaveProperty('done')
      })
  });
});
