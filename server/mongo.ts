import mongoose from 'mongoose'
const MONGO = process.env.MONGO_URI || 'mongodb://mongo:27017/nextgenapp'
let conn = false
export default async function connect(){
  if (conn) return
  await mongoose.connect(MONGO)
  conn = true
}
