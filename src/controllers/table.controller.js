//import Session from '../models/session.model.js'
import Table from '../models/table.model.js'
import Restaurant from '../models/restaurant.model.js'

export const getTables = async (req, res) => {
  try {
    const {id} = req.params;
    let table;
    if (id) {
      table = await Table.findById(id)
      if (!table) {
        return res.status(404).json({error: 'Table not found.'})
      }
    }
    else
      table = await Table.find()
    res.status(200).json(table)
  } catch (error) {
    res.status(404).json({message: error.message})
  }
}

export const createTable = async (req, res) => {
  try {
    const {number, restaurant_id} = req.body //Number
    const restaurant = await Restaurant.findById(restaurant_id)

    if (!restaurant)
      return res.status(404).json({error: 'Restaurant not found.'})

    const newTable = new Table({number, restaurant})
    await newTable.save()
    await restaurant.tables.push(newTable)
    await restaurant.save()
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