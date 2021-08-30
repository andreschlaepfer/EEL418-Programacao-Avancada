import express from 'express'
import {getSessions, createSession, updateSession, deleteSession} from '../controllers/session.controller.js'
//import Session from '../models/session.model.js'
const router = express.Router()

router.get('/', getSessions)
router.post('/add', createSession)
router.put('/:id', updateSession)
router.delete('/:id', deleteSession)

export default router