const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const session = require('express-session');

const app = express();

require('dotenv').config();

// const usersRouter = require('./routes/api/users');
const indexRouter = require('./routes/index');
const weaponsRouter = require('./routes/api/weapons');
const magicItemsRouter = require('./routes/api/magic_items');
const peopleRouter = require('./routes/api/people');
const eventRouter = require('./routes/api/events');
const placeRouter = require('./routes/api/places');

require('./config/database');

// Log requests and responses
app.use(logger('dev'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
// Generic security module
app.use(helmet());

app.use( session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
}));

app.use('/', indexRouter);
app.use('/api/weapons', weaponsRouter);
app.use('/api/magic_items', magicItemsRouter);
app.use('/api/people', peopleRouter);
app.use('/api/events', eventRouter);
app.use('/api/places', placeRouter);

const port = process.env.PORT || 3001;
	
app.listen(port, () => {
  console.log(`Server active on port ${port}`)
});