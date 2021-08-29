import Order from '../models/order.model.js'
import Session from '../models/session.model.js'
//import User from '../models/user.model.js'

export const getOrders = async (req, res) => {
  try {
    const allOrders = await Order.find().populate('items', ['name', 'price'])
    res.status(200).json(allOrders)
  } catch (error) {
    res.status(404).json({message: error.message})
  }
}
// ['items','customer']

export const createOrder = async (req, res) => {
  try {
    const status = req.body.status
    const session = req.body.session //_id
    const items = req.body.items
    const session1 = await Session.findById(session)
    const newOrder = new Order({status, session, items})
  
    await newOrder.save()
    await session1.orders.push(newOrder)
    await session1.save()
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