import React from 'react'
import { FaGithub } from 'react-icons/fa'
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image, Button, Link
} from '@chakra-ui/react';
import coolMonk from '../logo/coolMonk.PNG'
import sephora from '../logo/sephora.PNG'
import samadhanKendra from '../logo/samadhanKendra.PNG'


const Project = () => {
  return (
    <Box id='projectpage' boxShadow={'2xl'} width={'95%'} margin={'auto'}>
    <Heading  fontSize={{ base: '3xl', md: '5xl', lg: '7xl' }} _hover={{transform: 'scale(1.05)', }}>PROJECTS</Heading> <br /><br />    
      <Center    gap={'20px'}  >
      <Stack  direction={{ base: 'column', md: 'row' }}>        
          <Center py={12}>
            <Box
              role={'group'}
              p={6}
              maxW={'400px'}
              height={'480px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.800')}
              boxShadow={'2xl'}
              rounded={'lg'}
              pos={'relative'}
              zIndex={1}
              _hover={{transform: 'scale(1.05)', }}
              >
              <Box
                rounded={'lg'}
                mt={-12}
                pos={'relative'}
                height={'250px'}
                _after={{
                  transition: 'all .3s ease',
                  content: '""',
                  w: 'full',
                  h: 'full',
                  pos: 'absolute',
                  top: 5,
                  left: 0,
                  backgroundImage: `url(${coolMonk})`,
                  filter: 'blur(15px)',
                  zIndex: -1,
                }}
                _groupHover={{
                  _after: {
                    filter: 'blur(20px)',
                    transform: 'scale(1.2)',
                  },
                }}>
                <Image
                  rounded={'lg'}
                  height={250}
                  width={350}
                  objectFit={'cover'}
                  src={coolMonk}
                />
              </Box>
              <Stack pt={10} align={'center'}>
                <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                  Cool Monk
                </Heading>
                <Text color={'gray.500'} fontSize={'md'} >
                  Shop.com is the e-commerce website for buying clothes,electronics and
                  daily essentials.
                </Text>
                <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                  Tech stack : HTML | CSS | JavaScript
                </Text>

                <Stack direction={'row'} align={'center'}>
                <Link href={'https://github.com/surya101294/delightful-secretary-78'} target="_blank">
                  <Button
                    rounded={'full'}
                    // bg={'blue.400'}
                    // color={'white'}
                    _hover={{
                      bg: 'black.300',
                    }}
                    leftIcon={<FaGithub size="30px" />}
                  >
                  </Button>
                  </Link>
                  <Link href={'https://prismatic-lolly-ef78c1.netlify.app/'} target="_blank">
                  <Button rounded={'full'}>Live</Button>
                  </Link>
                </Stack>
              </Stack>
            </Box>
          </Center>
        
          <Center py={12}>
            <Box
              role={'group'}
              p={6}
              maxW={'400px'}
              height={'480px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.800')}
              boxShadow={'2xl'}
              rounded={'lg'}
              pos={'relative'}
              zIndex={1}
              _hover={{transform: 'scale(1.05)', }}>
              <Box
                rounded={'lg'}
                mt={-12}
                pos={'relative'}
                height={'250px'}
                _after={{
                  transition: 'all .3s ease',
                  content: '""',
                  w: 'full',
                  h: 'full',
                  pos: 'absolute',
                  top: 5,
                  left: 0,
                  backgroundImage: `url(${samadhanKendra})`,
                  filter: 'blur(15px)',
                  zIndex: -1,
                }}
                _groupHover={{
                  _after: {
                    filter: 'blur(20px)',
                    transform: 'scale(1.2)',
                  },
                }}>
                <Image
                  rounded={'lg'}
                  height={250}
                  width={350}
                  objectFit={'cover'}
                  src={samadhanKendra}
                />
              </Box>
              <Stack pt={10} align={'center'}>
                <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                  Samadhan Kendra
                </Heading>
                <Text color={'gray.500'} fontSize={'md'} >
                  Urban Company is an online platform where one can seek services from different professionals from plumbers to electricians to beauticians.
                </Text>
                <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                  Tech stack: HTML | CSS | JavaScript | React |Chakara
                </Text>

                <Stack direction={'row'} align={'center'}>
                <Link href={'https://github.com/surya101294/craven-government-8390'} target="_blank">
                  <Button
                    rounded={'full'}
                    // bg={'blue.400'}
                    // color={'white'}
                    _hover={{
                      bg: 'black.300',
                    }}
                    leftIcon={<FaGithub size="30px" />}
                  >
                  </Button>
                  </Link>
                  <Link href={'https://unique-longma-beb0ee.netlify.app/'} target="_blank" >
                  <Button rounded={'full'}>Live</Button>
                  </Link>
                </Stack>
              </Stack>
            </Box>
          </Center>
       
        <Center py={12}>
            <Box
              role={'group'}
              p={6}
              maxW={'400px'}
              height={'480px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.800')}
              boxShadow={'2xl'}
              rounded={'lg'}
              pos={'relative'}
              zIndex={1}
              _hover={{transform: 'scale(1.05)', }}>
              <Box
                rounded={'lg'}
                mt={-12}
                pos={'relative'}
                height={'250px'}
                _after={{
                  transition: 'all .3s ease',
                  content: '""',
                  w: 'full',
                  h: 'full',
                  pos: 'absolute',
                  top: 5,
                  left: 0,
                  backgroundImage: `url(${sephora})`,
                  filter: 'blur(15px)',
                  zIndex: -1,
                }}
                _groupHover={{
                  _after: {
                    filter: 'blur(20px)',
                    transform: 'scale(1.2)',
                  },
                }}>
                <Image
                  rounded={'lg'}
                  height={250}
                  width={350}
                  objectFit={'cover'}
                  src={sephora}
                />
              </Box>
              <Stack pt={10} align={'center'}>
                <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                  Sephora
                </Heading>
                <Text color={'gray.500'} fontSize={'md'} >
                  Sephora is a French multinational retailer of personal care and beauty products.
                </Text>
                <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                  Tech stack: HTML | CSS | JavaScript
                </Text>

                <Stack direction={'row'} align={'center'}>
                <Link href={'https://github.com/surya101294/Sephora_website_clone'} target="_blank">
                  <Button
                    rounded={'full'}
                    // bg={'blue.400'}
                    // color={'white'}
                    _hover={{
                      bg: 'black.300',
                    }}
                    leftIcon={<FaGithub size="30px" />}
                  >
                  </Button>
                  </Link>
                  <Link href={'https://extraordinary-blini-450159.netlify.app/'} target="_blank">
                  <Button rounded={'full'}>Live</Button>
                  </Link>
                </Stack>
              </Stack>
            </Box>
          </Center>
         
        </Stack>
      </Center>
    </Box>
  )
}

export default Project
