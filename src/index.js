
import knex from './knexfile'
// const express =
import express from 'express';
const morgan=require('morgan')
import router from './route';
import logger from './logger';

const app = express()
const port = 3000;
app.use(morgan('combined'));

app.use('/api',router);

app.listen(port, () => logger.info('message'));

