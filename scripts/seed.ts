import mongoose from 'mongoose'
import dotenv from 'dotenv'
import User from '../server/models/user'
import Vote from '../server/models/vote'
dotenv.config()
const MONGO = process.env.MONGO_URI || 'mongodb://localhost:27017/nextgenapp'
async function seed(){
  await mongoose.connect(MONGO)
  await Vote.create({ galleryId: 'demo-gallery', yes: 5, no: 1 })
  await User.create({ email: 'demo@local', password: '$2a$10$z', name: 'demo' }).catch(()=>{})
  console.log('seeded')
  process.exit(0)
}
seed().catch(e=>{ console.error(e); process.exit(1) })
