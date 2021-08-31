import express from 'express'
import {getUsers, createUser, updateUser, deleteUsers} from '../controllers/user.controller.js'
//import User from '../models/user.model.js'
const router = express.Router()

router.get('/', getUsers)
router.post('/', createUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUsers)

export default router