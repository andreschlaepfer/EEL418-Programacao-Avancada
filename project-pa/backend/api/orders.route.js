import express from 'express'
import {getOrders, createOrder, updateOrder, deleteOrder} from '../controllers/order.controller.js'
import Order from '../models/order.model.js'
const router = express.Router()

router.get('/', getOrders)
router.post('/add', createOrder)
router.put('/update/:id', updateOrder)
router.delete('/delele/:id', deleteOrder)

export default router