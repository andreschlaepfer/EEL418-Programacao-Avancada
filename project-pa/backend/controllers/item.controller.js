import Item from '../models/item.model.js'
import Restaurant from '../models/restaurant.model.js'

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
  const restaurant1 = await Restaurant.findById(restaurant)
  const newItem = new Item({name, description, price, restaurant})
  try {
    await newItem.save()
    await restaurant1.menuItems.push(newItem)
    await restaurant1.save()
    res.status(201).json(newItem)
  } catch (error) {
    res.status(409).json({message: error.message})
  }
}

export const updateItem = async (req, res) => {
  res.json(
    await Item.findByIdAndUpdate(req.params.id, req.body).catch(
      (error) => res.status(400).json(error)
      )
      )
}

export const deleteItem = async (req, res) => {
  res.json(
    await Item.findByIdAndRemove(req.params.id).catch((error) => res.status(400).json(error))
  )
}