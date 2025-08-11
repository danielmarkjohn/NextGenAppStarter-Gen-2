'use client'
import React from 'react'
import VoteCard from './VoteCard'
import AuthPanel from './AuthPanel'

export default function Home(){
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold">NextGenApp — Next.js Fullstack</h1>
      </header>
      <AuthPanel />
      <VoteCard />
    </div>
  )
}
