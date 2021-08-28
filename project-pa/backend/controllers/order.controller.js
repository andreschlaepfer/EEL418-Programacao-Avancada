import { createSecretKey } from 'node:crypto'
import Order from '../models/order.model.js'
import User from '../models/user.model.js'

export const getOrders = async (req, res) => {
  try {
    const allOrders = await Order.find().populate('items', ['name', 'price'])
    res.status(200).json(allOrders)
  } catch (error) {
    res.status(404).json({message: error.message})
  }
}
// ['items','costumer']

export const createOrder = async (req, res) => {
  const status = req.body.status
  const costumer = req.body.costumer //_id
  const items = req.body.items
  const user1 = await User.findById(costumer)
  const newOrder = new Order({status, costumer, items})
  
  try {
    await newOrder.save()
    user1.order = newOrder.id
    await user1.save()
    res.status(201).json(newOrder)
  } catch (error) {
    res.status(409).json({message: error.message})
  }
}

export const updateOrder = async (req, res) => {
  res.json(
    await Order.findByIdAndUpdate(req.params.id, req.body).catch(
      (error) => res.status(400).json(error)
      )
      )
}

export const deleteOrder = async (req, res) => {
  res.json(
    await Order.findByIdAndRemove(req.params.id).catch((error) => res.status(400).json(error))
  )
}