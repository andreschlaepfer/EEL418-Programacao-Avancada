import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'


import itemsRouter from './api/items.route.js'
import restaurantsRouter from './api/restaurants.route.js'
import usersRouter from './api/users.route.js'

const app = express();

app.use(cors());
app.use(express.json());



app.use('/api/v1/items', itemsRouter);
app.use('/api/v1/restaurants', restaurantsRouter);
app.use('/api/v1/users', usersRouter);
app.use('*', (req, res) => res.status(404).json({error: "Not found"}))




export default app;