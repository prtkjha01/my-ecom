import React from 'react'
import Head from 'next/head'
import SignupForm from '@/components/SignupForm'

const signup = () => {
  return (
    <div 
    style={{
        height: '100vh',
        backgroundColor: '#c5c7c7',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <Head>
            <title>signup</title>
        </Head>
        <SignupForm/>
    </div>
  )
}

export default signup