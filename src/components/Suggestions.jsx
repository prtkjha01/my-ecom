import React from 'react'
import styles from '../styles/Suggestions.module.css'
import Carousel from "react-elastic-carousel";
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Text, Divider, Button, ButtonGroup, Image } from '@chakra-ui/react'
// import ReactElasticCarousel from 'react-elastic-carousel';

const Suggestions = () => {
    const suggestionList = [
        {
            id: 1,
            imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        },
        {
            id: 2,
            imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        },
        {
            id: 3,
            imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        },
        {
            id: 4,
            imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        },
        {
            id: 5,
            imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        },
        {
            id: 6,
            imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        }
    ]
  return (
    <div>
    <h1 className='mx-4 my-1 text-3xl font-bold'>
    Suggestions
    </h1> 
    <div className={styles.suggestionScroll}>
        <Carousel
        itemsToScroll={2} 
        itemsToShow={3}
        pagination={false}
        enableAutoPlay
        // itemsToShow={2}
        >
        {
            suggestionList.map((suggestion, index)=>{

           return (
            <Card className={styles.suggestionCard} key={suggestion.id} maxW='sm'>
            <CardBody>
                <Image
                src={suggestion.imageUrl}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                <Text color='blue.600' fontSize='2xl'>
                    $450
                </Text>
                <Heading size='md'>Living room Sofa</Heading>
                <Text>
                    This sofa is perfect for modern tropical spaces, baroque inspired
                    spaces, earthy toned spaces and for people who love a chic design with a
                    sprinkle of vintage design.
                </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue'>
                    Buy now
                </Button>
                <Button variant='ghost' colorScheme='blue'>
                    Add to cart
                </Button>
                </ButtonGroup>
            </CardFooter>
            </Card>)
            })
        }
        </Carousel>
    </div>
    </div>
  )
}

export default Suggestions