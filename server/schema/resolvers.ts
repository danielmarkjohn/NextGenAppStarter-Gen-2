import VoteModel from '../models/vote'
import UserModel from '../models/user'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const resolvers = {
  Query: {
    health: () => 'ok',
    voteTally: async (_: any, { galleryId }: any) => {
      const doc = await VoteModel.findOne({ galleryId }) || { yes:0, no:0 }
      return { yes: doc.yes || 0, no: doc.no || 0 }
    },
    me: async (_: any, __: any, { req }: any) => {
      // GraphQL context can read cookies via req
      const token = req.cookies?.token
      if (!token) return null
      try {
        const p: any = jwt.verify(token, process.env.JWT_SECRET || 'dev')
        const user = await UserModel.findById(p.id)
        return user ? { id: user._id, email: user.email, name: user.name } : null
      } catch (e) { return null }
    }
  },
  Mutation: {
    vote: async (_: any, { galleryId, choice }: any) => {
      const doc = await VoteModel.findOneAndUpdate(
        { galleryId },
        { $inc: choice === 'yes' ? { yes: 1 } : { no: 1 } },
        { upsert: true, new: true }
      )
      return { yes: doc.yes, no: doc.no }
    },
    register: async (_: any, { email, password, name }: any, { res }: any) => {
      const existing = await UserModel.findOne({ email })
      if (existing) throw new Error('User exists')
      const hash = await bcrypt.hash(password, 10)
      const u = await UserModel.create({ email, password: hash, name })
      const token = jwt.sign({ id: u._id }, process.env.JWT_SECRET || 'dev', { expiresIn: '15m' })
      const refresh = jwt.sign({ id: u._id }, process.env.JWT_REFRESH_SECRET || 'dev-refresh', { expiresIn: '7d' })
      // set in response if available
      if (res && res.setHeader) {
        res.setHeader('Set-Cookie', [
          `token=${token}; HttpOnly; Path=/; Max-Age=${60*15}`,
          `refresh=${refresh}; HttpOnly; Path=/; Max-Age=${60*60*24*7}`
        ])
      }
      return token
    },
    login: async (_: any, { email, password }: any, { res }: any) => {
      const user = await UserModel.findOne({ email })
      if (!user) throw new Error('Invalid')
      const ok = await bcrypt.compare(password, user.password)
      if (!ok) throw new Error('Invalid')
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'dev', { expiresIn: '15m' })
      const refresh = jwt.sign({ id: user._id }, process.env.JWT_REFRESH_SECRET || 'dev-refresh', { expiresIn: '7d' })
      if (res && res.setHeader) {
        res.setHeader('Set-Cookie', [
          `token=${token}; HttpOnly; Path=/; Max-Age=${60*15}`,
          `refresh=${refresh}; HttpOnly; Path=/; Max-Age=${60*60*24*7}`
        ])
      }
      return token
    }
  }
}
