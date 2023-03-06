import LoginForm from '@/components/LoginForm'
import React from 'react'
import Head from 'next/head'

const login = () => {
  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      <LoginForm/>
    </div>
  )
}

export default login