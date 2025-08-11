import type { NextApiRequest, NextApiResponse } from 'next'
import connect from '../../../server/mongo'
import User from '../../../server/models/user'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import cookie from 'cookie'

connect()

export default async function handler(req: NextApiRequest, res: NextApiResponse){
  if (req.method !== 'POST') return res.status(405).end()
  const { email, password } = req.body
  const existing = await User.findOne({ email })
  if (existing) return res.status(400).json({ error: 'User exists' })
  const hash = await bcrypt.hash(password, 10)
  const u = await User.create({ email, password: hash })
  const token = jwt.sign({ id: u._id }, process.env.JWT_SECRET || 'dev', { expiresIn: '15m' })
  const refresh = jwt.sign({ id: u._id }, process.env.JWT_REFRESH_SECRET || 'dev-refresh', { expiresIn: '7d' })
  res.setHeader('Set-Cookie', [
    cookie.serialize('token', token, { httpOnly: true, path: '/', maxAge: 60*15 }),
    cookie.serialize('refresh', refresh, { httpOnly: true, path: '/', maxAge: 60*60*24*7 })
  ])
  res.json({ ok: true })
}
