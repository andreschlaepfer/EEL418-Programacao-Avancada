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
  const order = req.body.order 
  const table = req.body.table
  const newUser = new User({username, cellnumber, table, order})
  try {
    await newUser.save()
    res.status(201).json(newUser)
  } catch (error) {
    res.status(409).json({message: error.message})
  }
}

export const updateUser = async (req, res) => {
  res.json(
    await User.findByIdAndUpdate(req.params.id, req.body).catch(
      (error) => res.status(400).json(error)
      )
      )
}

export const deleteUsers = async (req, res) => {
  res.json(
    await User.findByIdAndRemove(req.params.id).catch((error) => res.status(400).json(error))
  )
}