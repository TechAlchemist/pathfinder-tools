const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

require('dotenv').config();

// const usersRouter = require('./routes/api/users');
const weaponsRouter = require('./routes/api/weapons');
const magicItemsRouter = require('./routes/api/magic_items');
const peopleRouter = require('./routes/api/people');

require('./config/database');

// Log requests and responses
app.use(logger('dev'));
app.use(express.json());
// Share resources with front-end
app.use(cors());
// Generic security module
app.use(helmet());

app.use('/api/weapons', weaponsRouter);
app.use('/api/magic_items', magicItemsRouter);
app.use('/api/people', peopleRouter);

const port = process.env.PORT || 3001;
	
app.listen(port, () => {
  console.log(`Server active on port ${port}`)
});