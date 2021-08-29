//import Session from '../models/session.model.js'
import Table from '../models/table.model.js'
import Restaurant from '../models/restaurant.model.js'

export const getTables = async (req, res) => {
  try {
    const allSessions = await Table.find()
    res.status(200).json(allSessions)
  } catch (error) {
    res.status(404).json({message: error.message})
  }
}
// ['items','customer']

export const createTable = async (req, res) => {
  try {
    const number = req.body.customer //Number
    const restaurant = req.body.restaurant //_id
    const restaurant1 = await Restaurant.findById(restaurant)
    const newTable = new Table({number, restaurant})
    await newTable.save()
    await restaurant1.tables.push(newTable)
    await restaurant1.save()
    res.status(201).json(newTable)
  } catch (error) {
    res.status(409).json({message: error.message})
  }
}

export const updateTable = async (req, res) => {
  res.json(
    await Table.findByIdAndUpdate(req.params.id, req.body).catch(
      (error) => res.status(400).json(error)
      )
      )
}

export const deleteTable = async (req, res) => {
  res.json(
    await Table.findByIdAndRemove(req.params.id).catch((error) => res.status(400).json(error))
  )
}