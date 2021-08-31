import express from 'express'
import {getTables, createTable, updateTable, deleteTable} from '../controllers/table.controller.js'
import authMiddleware from '../middlewares/auth.js'
//import Table from '../models/Table.model.js'
const router = express.Router()

router.get('/:id', getTables)

// router.use(authMiddleware)

router.get('/', getTables)
router.post('/', createTable)
router.put('/:id', updateTable)
router.delete('/:id', deleteTable)

export default router