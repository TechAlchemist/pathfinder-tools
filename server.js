const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const app = express();


require('dotenv').config();

const usersRouter = require('./routes/api/users');
const weaponsRouter = require('./routes/api/weapons');

// require('./config/database');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());


// app.use('/api/users', usersRouter);
app.use('/api/weapons', weaponsRouter);

const port = process.env.PORT || 3001;
	
app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});