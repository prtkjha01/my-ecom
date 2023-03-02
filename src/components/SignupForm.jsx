import React, { useState } from "react";
import { useRouter } from 'next/router';
import styles from "../styles/SignupForm.module.css";
import axios from "axios";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";


const SignupForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const givenSignUpDetails = {
    fName : "",
    lName : "",
    age: 0,
    mobile: 0,
    email: "",  
    password: ""
  }
  const handleSignUp = () =>{
    const signUpDetails = {
        name : `${givenSignUpDetails.fName} ${givenSignUpDetails.lName}`,
        age: givenSignUpDetails.age,
        mobile: givenSignUpDetails.mobile,
        email: givenSignUpDetails.email,  
        password: givenSignUpDetails.password
    }
    if(givenSignUpDetails.fName.length === 0){
        alert('naam theek se daal lawde !!!!!')
    }else{
        signUp(signUpDetails)
    } 
  }
  const signUp = async (signUpDetails) => {
 
    new Promise((resolve, reject)=>{
        axios.post(`${process.env.NEXT_PUBLIC_SERVER_LOCAL}/users/signUp`,signUpDetails)
        .then((res)=>{
            console.log(res);
            resolve(res)
            router.push('/')
        })
        .catch((err)=>{
            console.log(err.message);
            reject(err)
        })
    })
  };
  return (
    <div>
      <Flex
        maxH={"90vh"}
        align={"center"}
        justify={"center"}
        rounded="lg"
        boxShadow="2xl"
        bg={useColorModeValue("gray.50", "gray.800")}
      > 
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Sign up
            </Heading>
            {/* <Button onClick={() => router.push('/wishlist')}>change route</Button> */}
            {/* <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool features ✌️
            </Text> */}
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" onChange={(e)=>{ 
                        givenSignUpDetails.fName = e.target.value
                        console.log(givenSignUpDetails.fName); 
                    }}/>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" onChange={(e)=>{
                        givenSignUpDetails.lName = e.target.value
                        console.log(givenSignUpDetails.lName);
                    }}/>
                  </FormControl>
                </Box>
              </HStack>
              <HStack>
                <Box>
                  <FormControl id="age">
                    <FormLabel>Age</FormLabel>
                    <Input type="text" onChange={(e)=>{
                        givenSignUpDetails.age = e.target.value
                        console.log(givenSignUpDetails.age);
                    }}/>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="mobile">
                    <FormLabel>Mobile</FormLabel>
                    <Input type="text" onChange={(e)=>{
                        givenSignUpDetails.mobile = e.target.value
                        console.log(givenSignUpDetails.age);
                    }}/>
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" onChange={(e)=>{
                    givenSignUpDetails.email = e.target.value
                    console.log(givenSignUpDetails.email);
                }}/>
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? "text" : "password"} onChange={(e)=>{
                    givenSignUpDetails.password = e.target.value
                    console.log(givenSignUpDetails.password);
                }}/>
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button onClick={()=>{console.log(givenSignUpDetails);}}>show filled details</Button>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={handleSignUp}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user? <Link color={"blue.400"}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </div>
  );
};

export default SignupForm;
