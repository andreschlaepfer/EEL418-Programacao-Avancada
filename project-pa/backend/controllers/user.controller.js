import User from '../models/user.model.js'

export const getUsers = async (req, res) => {
  try {
    const allUsers = await User.find()
    res.status(200).json(allUsers)
  } catch (error) {
    res.status(404).json({message: error.message})
  }
}

export const createUser = async (req, res) => {
  const username = req.body.username
  const cellnumber = req.body.cellnumber
  const newUser = new User({username, cellnumber})
  try {
    await newUser.save()
    res.status(201).json(newUser)
  } catch (error) {
    res.status(409).json({message: error.message})
  }
}

export const updateUser = (req, res) => {
  res.send('UpdateUser!')
}

export const deleteUsers = (req, res) => {
  res.send('DeleteUsers!')
}