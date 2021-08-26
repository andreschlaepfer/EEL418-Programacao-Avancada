import Item from '../models/item.model.js'

export const getItems = async (req, res) => {
  try {
    const allItems = await Item.find().populate('restaurant', 'name')
    res.status(200).json(allItems)
  } catch (error) {
    res.status(404).json({message: error.message})
  }
}

export const createItem = async (req, res) => {
  const name = req.body.name
  const description = req.body.description
  const price = req.body.price
  const restaurant = req.body.restaurant
  const newItem = new Item({name, description, price, restaurant})
  try {
    await newItem.save()
    res.status(201).json(newItem)
  } catch (error) {
    res.status(409).json({message: error.message})
  }
}

export const updateItem = (req, res) => {
  res.send('UpdateItem!')
}

export const deleteItem = (req, res) => {
  res.send('DeleteItem!')
}