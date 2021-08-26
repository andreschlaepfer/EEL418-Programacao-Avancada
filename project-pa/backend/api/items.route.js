import express from 'express'
import {getItems, createItem, updateItem, deleteItem} from '../controllers/item.controller.js'
import Item from '../models/item.model.js'
const router = express.Router()

router.get('/', getItems)
router.post('/add', createItem)
router.put('/put', updateItem)
router.delete('/del', deleteItem)

export default router