'use client'
import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from '../../store'

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || 'http://localhost:3000/api/graphql',
  cache: new InMemoryCache(),
})

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ApolloProvider client={client}>
      <ReduxProvider store={store}>{children}</ReduxProvider>
    </ApolloProvider>
  )
}
