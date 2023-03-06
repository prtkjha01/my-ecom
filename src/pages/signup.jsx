import React from 'react'
import Head from 'next/head'
import SignupForm from '@/components/SignupForm'

const signup = () => {
  return (
    <div>
        <Head>
            <title>Sign up</title>
        </Head>
        <SignupForm/>
    </div>
  )
}

export default signup