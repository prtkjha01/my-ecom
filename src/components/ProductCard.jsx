import React, {useState} from 'react'
import styles from '../styles/ProductCard.module.css'
import { Box } from '@chakra-ui/react'

const ProductCard = () => {
    const dummy = [
        {
            id: 1,
            name : "product 1",
            description : "mera loda sabse lamba",
            price: 2.5
        },
        {
            id: 2,
            name : "product 1",
            description : "mera loda sabse lamba",
            price: 2.5
        },
        {
            id: 3,
            name : "product 1",
            description : "mera loda sabse lamba",
            price: 2.5
        },
        {
            id: 4,
            name : "product 1",
            description : "mera loda sabse lamba",
            price: 2.5
        },
        {
            id: 5,
            name : "product 1",
            description : "mera loda sabse lamba",
            price: 2.5
        },
        {
            id: 6,
            name : "product 1",
            description : "mera loda sabse lamba",
            price: 2.5
        }
    ]
    const [wishlistProducts, setWishlistProducts] =  useState(
        [
            {
                id: 1,
                name : "product 1",
                description : "mera loda sabse lamba",
                price: 2.5
            },
            {
                id: 2,
                name : "product 2",
                description : "mera loda sabse lamba",
                price: 2.5
            },
            {
                id: 3,
                name : "product 3",
                description : "mera loda sabse lamba",
                price: 2.5
            },
            {
                id: 4,
                name : "product 4",
                description : "mera loda sabse lamba",
                price: 2.5
            },
            {
                id: 5,
                name : "product 5",
                description : "mera loda sabse lamba",
                price: 2.5
            },
            {
                id: 6,
                name : "product 6",
                description : "mera loda sabse lamba",
                price: 2.5
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
            }
            else {
                console.log('tu dalla behen ka loda')
                return ekObject
            };
        })
        // temp[i].price += 1;
        setWishlistProducts(temp);
    }
  return (
    <div className={`${styles.abc}`}>
        <div className={`${styles.wishlistWrapper}`}>
            {
                wishlistProducts.map((wishlistProduct, index)=>{
                    return(
                    <Box key={index} borderRadius='' mx={4} p={4} borderWidth='1px' boxShadow=''>
                        <p>{wishlistProduct.name}</p>
                        <p>{wishlistProduct.description}</p>
                        <p>{wishlistProduct.price}</p>
                        <button type="button" onClick={()=>{fun(index)}}>fuck meee!!!</button>
                    </Box>
                    )
                })
            } 
            accha
        </div>
    </div>
  )
}

export default ProductCard