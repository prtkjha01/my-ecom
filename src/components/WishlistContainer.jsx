import React, {useState} from 'react'
import styles from '../styles/WishlistContainer.module.css'
import { Box } from '@chakra-ui/react'
import ProductCard from './ProductCard.jsx'

const WishlistContainer = () => {
    const [wishlistProducts, setWishlistProducts] =  useState(
        [
            {
                id: 1,
                name : "product 1",
                description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare sem urna. Sed vehicula scelerisque lacus ac auctor. Etiam finibus lectus ac venenatis ultricies",
                price: '2500'
            },
            {
                id: 2,
                name : "product 2",
                description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare sem urna. Sed vehicula scelerisque lacus ac auctor. Etiam finibus lectus ac venenatis ultricies",
                price: '2500'
            },
            {
                id: 3,
                name : "product 3",
                description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare sem urna. Sed vehicula scelerisque lacus ac auctor. Etiam finibus lectus ac venenatis ultricies",
                price: '2500'
            },
            {
                id: 4,
                name : "product 4",
                description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare sem urna. Sed vehicula scelerisque lacus ac auctor. Etiam finibus lectus ac venenatis ultricies",
                price: '2500'
            },
            {
                id: 5,
                name : "product 5",
                description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare sem urna. Sed vehicula scelerisque lacus ac auctor. Etiam finibus lectus ac venenatis ultricies",
                price: '2500'
            },
            {
                id: 6,
                name : "product 6",
                description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare sem urna. Sed vehicula scelerisque lacus ac auctor. Etiam finibus lectus ac venenatis ultricies",
                price: '2500'
            }
        ]
    );
    // setWishlistProducts(dummy);
    const fun = (i) => {
        console.log("aaah!");
        const temp = wishlistProducts.map((ekObject,index)=>{
            if(index === i) {
                console.log('fuddiyan paado!');
                ekObject.price++;
                return ekObject
            }else {
                console.log('tu dalla behen ka loda', index)
                return ekObject
            };
        })
        // temp[i].price += 1;
        setWishlistProducts(temp);
    }
    const handleDelete = (index) => {
       setWishlistProducts([ 
            ...wishlistProducts.slice(0, index),
            ...wishlistProducts.slice(index + 1, wishlistProducts.length)
          ])
        // console.log(wishlistProducts);
    }
  return (
    <div>
     
    <div className={`${styles.abc}`}>
        <Box width={{ base: '100vw', md: '80vw', lg: '80vw' }} className={`${styles.wishlistWrapper}`}>
        <Box borderBottomWidth="2px" className='font-medium' >My Wishlist ({wishlistProducts.length})</Box>   
            {
                wishlistProducts.map((wishlistProduct, index)=>{
                    return(
                    // <Box key={index} borderRadius='' mx={4} p={4} borderBottomWidth='1px' boxShadow=''>
                    //     <p>{wishlistProduct.name}</p>
                    //     <p>{wishlistProduct.description}</p>
                    //     <p>{wishlistProduct.price}</p>
                    //     <button type="button" onClick={()=>{fun(index)}}>click meee!!!</button>
                    // </Box>
                    <ProductCard
                        key={index}
                        name={wishlistProduct.name}
                        description = {wishlistProduct.description}
                        price = {wishlistProduct.price}
                        index = {index}
                        handleClick={fun}
                        handleDelete={handleDelete}
                    />
                    )
                })
            } 
        </Box>
        <Box 
            width={{ base: '0px', md: '30vw', lg: '30vw' }} 
            //bg={'#3A003D'} 
            className={styles.infoDiv}
        >
            <p color='#000' className='text-3xl text-black'>I DONT KNOW WHAT TO DO WITH THIS PART</p>
            {/* <Box 
                bg={'tomato'}
                p={0}
            >
            hi
            </Box> */}
        </Box>
    </div>
    </div>
  )
}

export default WishlistContainer