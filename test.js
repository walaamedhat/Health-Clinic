const router = require('./src/server/controllers/routes');
const test = require('tape');
const shot = require('shot');

test('Initialise', t => {
  const num = 2;
  t.equal(num, 2, 'Should return 2');
  t.end();
});
// test('Home route', t => {
//   shot.inject(router, { method: 'get', url: '/' }, res => {
//     t.equal(res.statusCode, 200, 'should respond with status code of 200');
//     t.end();
//   });
// });
