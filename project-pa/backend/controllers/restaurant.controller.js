import Restaurant from '../models/restaurant.model.js'

export const getRestaurants = async (req, res) => {
  try {
    const allRestaurants = await Restaurant.find()
    res.status(200).json(allRestaurants)
  } catch (error) {
    res.status(404).json({message: error.message})
  }
}

export const createRestaurant = async (req, res) => {
  const name = req.body.username
  const cellnumber = req.body.cellnumber
  const newRestaurant = new Restaurant({name})
  try {
    await newRestaurant.save()
    res.status(201).json(newRestaurant)
  } catch (error) {
    res.status(409).json({message: error.message})
  }
}

export const updateRestaurant = (req, res) => {
  res.send('UpdateRestaurant!')
}

export const deleteRestaurant = (req, res) => {
  res.send('DeleteRestaurant!')
}