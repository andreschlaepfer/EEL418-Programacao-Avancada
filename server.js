import express from 'express'
import cors from 'cors'
//import mongoose from 'mongoose'


import itemsRouter from './src/api/items.route.js'
import restaurantsRouter from './src/api/restaurants.route.js'
import usersRouter from './src/api/users.route.js'
import ordersRouter from './src/api/orders.route.js'
import sessionsRouter from './src/api/sessions.route.js'
import tablesRouter from './src/api/tables.route.js'
import authMiddleware from './src/middlewares/auth.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/sessions', sessionsRouter);
app.use('/api/v1/tables', tablesRouter);

// app.use(authMiddleware);

app.use('/api/v1/items', itemsRouter);
app.use('/api/v1/orders', ordersRouter);
app.use('/api/v1/restaurants', restaurantsRouter);
app.use('/api/v1/users', usersRouter);
app.use('*', (req, res) => res.status(404).json({error: "Not found"}))




export default app;