const request = require('supertest');
const app = require('../index');

test('GET / should return Hello, GitHub Actions!', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Hello, GitHub Actions!');
});
