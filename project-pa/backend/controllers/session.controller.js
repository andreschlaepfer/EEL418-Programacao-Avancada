import Session from '../models/session.model.js'
import Table from '../models/table.model.js'
//import User from '../models/user.model.js'

export const getSessions = async (req, res) => {
  try {
    const allSessions = await Session.find()
    res.status(200).json(allSessions)
  } catch (error) {
    res.status(404).json({message: error.message})
  }
}
// ['items','customer']

export const createSession = async (req, res) => {
  const customer = req.body.customer //_id
  const table = req.body.table //_id
  const table1 = await Table.findById(table)
  const newSession = new Session({customer, table})
  try {
    await newSession.save()
    table1.sessions.push(newSession)
    table1.save()
    res.status(201).json(newSession)
  } catch (error) {
    res.status(409).json({message: error.message})
  }
}

export const updateSession = async (req, res) => {
  res.json(
    await Session.findByIdAndUpdate(req.params.id, req.body).catch(
      (error) => res.status(400).json(error)
      )
      )
}

export const deleteSession = async (req, res) => {
  res.json(
    await Session.findByIdAndRemove(req.params.id).catch((error) => res.status(400).json(error))
  )
}