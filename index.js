import app from './server.js'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()

const port = process.env.PORT|| 8000

const connection = await mongoose.connect(
  process.env.ATLAS_URI,
  { useNewUrlParser: true, useUnifiedTopology: true })

app.listen(port, () => console.log(`Server is running on port ${port}`))