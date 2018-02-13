require('env2')('config.env');
const express = require('express');
const path = require('path');
const app = express();
const routes = require('./controllers/routes');

require('./middlewares/appMiddleware')(app, express);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
  next();
});

app.use('/api/v1/', routes);
app.use('/api/v1/', (req, res) => {
  res.status(404).json({ message: 'page  not found' });
});
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
});

app.listen(process.env.PORT || 3000, () => {
  console.log('server runs on 3000');
});
