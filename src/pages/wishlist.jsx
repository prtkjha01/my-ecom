import React from 'react'
import Head from 'next/head'
import { Inter } from "@next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { StylesProvider } from '@chakra-ui/react';
import ProductCard from '@/components/ProductCard';

const wishlist = () => {
  return (
    <div>
      <Head>
        <title>wishlist</title>
      </Head>
      <Navbar/>
      <ProductCard/>
      <Footer/>
    </div>
  )
}

export default wishlist