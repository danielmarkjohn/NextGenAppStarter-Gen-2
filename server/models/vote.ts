import mongoose, { Schema } from 'mongoose'

const VoteSchema = new Schema({
  galleryId: { type: String, required: true, unique: true },
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 }
}, { timestamps: true })

export default mongoose.models.Vote || mongoose.model('Vote', VoteSchema)
