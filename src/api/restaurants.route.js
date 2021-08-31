import express from 'express'
import {getRestaurants, createRestaurant, updateRestaurant, deleteRestaurant} from '../controllers/restaurant.controller.js'
//import Restaurants from '../models/restaurant.model.js'
const router = express.Router()

router.get('/', getRestaurants)
router.post('/', createRestaurant)
router.put('/:id', updateRestaurant)
router.delete('/:id', deleteRestaurant)

export default router