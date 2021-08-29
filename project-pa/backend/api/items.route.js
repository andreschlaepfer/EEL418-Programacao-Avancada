import express from 'express'
import {getItems, createItem, updateItem, deleteItem} from '../controllers/item.controller.js'
import Item from '../models/item.model.js'
const router = express.Router()

router.get('/:restaurantId', getItems)
router.post('/add', createItem)
router.put('/update/:id', updateItem)
router.delete('/delele/:id', deleteItem)

export default router