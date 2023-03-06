import React from 'react'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image'
import logoTransparent from '../assets/logoTransparent.png'
import styles from '../styles/LoginForm.module.css'

let NextImage = Image
const LoginForm = () => {
  return (
    <Flex
    className= {`${styles.loginForm}`}
    minH={'100vh'}
    align={'center'}
    justify={'center'}
     >
    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
      <Stack align={'center'}>
        <div>
        <NextImage className={`${styles.logo}`}src={logoTransparent} alt="brand logo"/>
        </div>
        <Heading fontSize={'4xl'} color={'rgb(58, 0, 61)'}>Sign in to your account</Heading>
        <Text className={`${styles.text}`} fontSize={'lg'}>
            Don't have an account <Link href ='/signup' color={'blue.400'}>Signup</Link>
          </Text>
      </Stack>
      <Box
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={8}>
        <Stack spacing={4}>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Stack spacing={10}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              <Link color={'blue.400'}>Forgot password?</Link>
            </Stack>
            <Button
              bg={'rgb(252, 88, 23)'}
              color={'white'}
              _hover={{
                bg: 'rgb(249, 77, 25)',
              }}>
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Flex>
  )
}

export default LoginForm