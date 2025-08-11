import mongoose, { Schema } from 'mongoose'

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: String,
  role: { type: String, default: 'user' }
}, { timestamps: true })

export default mongoose.models.User || mongoose.model('User', UserSchema)
