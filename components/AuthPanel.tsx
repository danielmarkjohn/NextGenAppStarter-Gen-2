'use client'
import React, { useState } from 'react'
import axios from 'axios'

export default function AuthPanel(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = async ()=>{
    await axios.post('/api/auth/login', { email, password })
    alert('Login attempted - check cookies')
  }

  const register = async ()=>{
    await axios.post('/api/auth/register', { email, password })
    alert('Register attempted')
  }

  return (
    <div className="p-4 bg-white rounded shadow space-y-2">
      <div className="flex gap-2">
        <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email" className="border p-2 rounded flex-1" />
        <input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="password" type="password" className="border p-2 rounded flex-1" />
      </div>
      <div className="flex gap-2">
        <button onClick={login} className="px-3 py-1 bg-blue-600 text-white rounded">Login</button>
        <button onClick={register} className="px-3 py-1 bg-gray-600 text-white rounded">Register</button>
      </div>
      <p className="text-sm text-gray-600">Auth uses secure HttpOnly cookies and JWT on the server.</p>
    </div>
  )
}
