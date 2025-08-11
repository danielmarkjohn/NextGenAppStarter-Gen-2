import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'
import cookie from 'cookie'
import connect from '../../../server/mongo'
import User from '../../../server/models/user'
connect()

export default async function handler(req: NextApiRequest, res: NextApiResponse){
  try {
    const cookies = req.cookies
    const token = cookies.refresh
    if (!token) return res.status(401).json({ error: 'No refresh' })
    const payload: any = jwt.verify(token, process.env.JWT_REFRESH_SECRET || 'dev-refresh')
    const user = await User.findById(payload.id)
    if (!user) return res.status(401).json({ error: 'Invalid' })
    const newToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'dev', { expiresIn: '15m' })
    res.setHeader('Set-Cookie', cookie.serialize('token', newToken, { httpOnly: true, path: '/', maxAge: 60*15 }))
    res.json({ ok: true })
  } catch (e) {
    return res.status(401).json({ error: 'Invalid' })
  }
}
