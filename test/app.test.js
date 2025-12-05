const request = require('supertest');
const app = require('../index');


describe('GET /health', () => {
it('responds with status ok', async () => {
const res = await request(app).get('/health');
expect(res.statusCode).toBe(200);
console.log(res.body,'response body');
expect(res.body).toHaveProperty('status', 'ok');
});
});