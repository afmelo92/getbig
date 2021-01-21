/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiRequest, NextApiResponse } from 'next'
import { MongoClient, Db } from 'mongodb'

let cachedDb: Db

async function connectToDatabase(uri: any) {
  if (cachedDb) {
    return cachedDb
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  const dbName = new URL(uri).pathname.substr(1)

  const db = client.db(dbName)

  cachedDb = db

  return db
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body

  const db = await connectToDatabase(process.env.MONGODB_URI)

  const collection = db.collection('subscribers')

  const verifyEmail = await collection.findOne({
    email
  })

  if (verifyEmail) {
    return res.status(400).json({ message: 'E-mail already used' })
  }

  await collection.insertOne({
    email,
    subscribedAt: new Date()
  })

  return res.status(200).json({ message: 'Subscribed' })
}

export default handler
