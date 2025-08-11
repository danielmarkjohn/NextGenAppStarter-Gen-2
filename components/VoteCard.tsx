'use client'
import React, { useState, useEffect } from 'react'
import { gql, useMutation, useQuery } from '@apollo/client'

const VOTE_TALLY = gql`query VoteTally($galleryId: ID!){ voteTally(galleryId:$galleryId){ yes no } }`
const VOTE = gql`mutation Vote($galleryId: ID!, $choice: String!){ vote(galleryId:$galleryId, choice:$choice){ yes no } }`

export default function VoteCard(){
  const galleryId = 'demo-gallery'
  const { data, refetch } = useQuery(VOTE_TALLY, { variables: { galleryId } })
  const [voteMutation] = useMutation(VOTE)
  const [tally, setTally] = useState({ yes:0, no:0 })

  useEffect(()=>{ if (data?.voteTally) setTally(data.voteTally) }, [data])

  const vote = async (choice: 'yes'|'no')=>{
    await voteMutation({ variables: { galleryId, choice } })
    refetch()
  }

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-semibold">Gallery Voting</h2>
      <div className="mt-3 flex items-center gap-2">
        <button onClick={()=>vote('yes')} className="px-3 py-1 bg-green-600 text-white rounded">Yes</button>
        <button onClick={()=>vote('no')} className="px-3 py-1 bg-red-600 text-white rounded">No</button>
        <div className="ml-auto">Tally: {tally.yes} / {tally.no}</div>
      </div>
    </div>
  )
}
