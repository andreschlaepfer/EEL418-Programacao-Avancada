import app from './server.js'
import mongodb from 'mongodb'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()

const MongoClient = mongodb.MongoClient

const port = process.env.PORT|| 8000

MongoClient.connect(
  process.env.ATLAS_URI,
  {
    poolSize: 200,
    wtimeout: 2500,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
  )
  .catch(err => {
    console.error(err.stack)
    process.exit(1)
  })
  .then(async client => {
    app.listen(port, () => {
      console.log(`Server is blabla running on port ${port}`)
    })
  })

  mongoose.connect(
    process.env.ATLAS_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    function (err, res) {
        try {
            console.log('Connected to Database');
        } catch (err) {
            throw err;
        }
    })
