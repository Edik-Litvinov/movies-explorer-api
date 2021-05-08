const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { celebrateErrorsHandler } = require('./middlewares/celebrateErrors');
const { centralizedErrorHandler } = require('./middlewares/centralizedError');
const allRoutes = require('./routes/index');
const limiter = require('./middlewares/rateLimiterConfig');

const app = express();
const { PORT = 3000, NODE_ENV, mongoport = 'mongodb://localhost:3100/bitfilmsdb' } = process.env;
mongoose.connect(
  NODE_ENV === 'production' ? mongoport : 'mongodb://localhost:27017/bitfilmsdb', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },
);

app.use(helmet());
app.use(limiter);
app.use(bodyParser.json());
app.use(requestLogger);
app.use(allRoutes);
app.use(errorLogger);
app.use(celebrateErrorsHandler);
app.use(centralizedErrorHandler);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
