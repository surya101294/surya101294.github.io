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
import sastaDeal from '../logo/sastaDeal.PNG'
import styluxE from '../logo/styluxE.PNG'

const Project = () => {
  return (
    <Box id='projectpage' boxShadow={'2xl'} width={'95%'} margin={'auto'} fontFamily={'lorum'}>
      <Heading fontFamily={'lorum'} fontSize={{ base: '3xl', md: '5xl', lg: '7xl' }} _hover={{ transform: 'scale(1.05)', }}>PROJECTS</Heading> <br /><br />
      <hr />
      <Center>
        <Stack direction={{ base: 'column', md: 'row' }} gap={'25px'} >

          <Center py={12} >
            <Box
              role={'group'}
              p={6}
              maxW={'500px'}
              height={'480px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.800')}
              boxShadow={'2xl'}
              rounded={'lg'}
              pos={'relative'}
              zIndex={1}
              _hover={{ transform: 'scale(1.05)', }}
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
                  backgroundImage: `url(${styluxE})`,
                  filter: 'blur(35px)',
                  zIndex: -3,
                }}
                _groupHover={{
                  _after: {
                    filter: 'blur(40px)',
                    transform: 'scale(1.05)',
                  },
                }}>
                <Image
                  rounded={'lg'}
                  // height={280}
                  // width={350}
                  objectFit={'cover'}
                  src={styluxE}
                />
              </Box>
              <Stack pt={10} align={'center'}>
                <Heading fontSize={'2xl'} fontFamily={'lorum'} fontWeight={700} textTransform={'uppercase'} >
                Stylux
                </Heading>
                <Text fontWeight={600} fontFamily={'lorum'}>
                Stylux is E-commerce website specialized in online retailing of men's and women's garments and accessories.
                </Text>
                <Text color={'blue.300'} fontSize={'sm'} fontWeight={600} textTransform={'uppercase'} fontFamily={'lorum'}>
                  Tech stack : HTML | CSS | JavaScript | React| react-redux | chakara | Nodejs | Express | MongoDB  
                </Text>

                <Stack direction={'row'} align={'center'}>
                  <Link href={'https://github.com/pgariya/remarkable-veil-524'} target="_blank">
                    <Button
                      rounded={'full'}
                      // bg={'blue.400'}
                      // color={'white'}
                      _hover={{
                        bg: 'blue.500',
                        transform: 'scale(1.2)'
                      }}
                      leftIcon={<FaGithub size="30px" />}
                    >
                    </Button>
                  </Link>
                  <Link href={'https://styluxe.vercel.app/'} target="_blank">
                    <Button rounded={'full'} _hover={{
                      bg: 'green.500',
                      transform: 'scale(1.2)'
                    }} fontFamily={'lorum'}>Live</Button>
                  </Link>
                </Stack>
              </Stack>
            </Box>
          </Center>

          <Center py={12}>
            <Box
              role={'group'}
              p={6}
              maxW={'500px'}
              height={'480px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.800')}
              boxShadow={'2xl'}
              rounded={'lg'}
              pos={'relative'}
              zIndex={1}
              _hover={{ transform: 'scale(1.05)', }}>
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
                  backgroundImage: `url(${sastaDeal})`,
                  filter: 'blur(35px)',
                  zIndex: -1,
                }}
                _groupHover={{
                  _after: {
                    filter: 'blur(20px)',
                    transform: 'scale(1.05)',
                  },
                }}>
                <Image
                  rounded={'lg'}
                  // height={250}
                  // width={350}
                  objectFit={'cover'}
                  src={sastaDeal}
                />
              </Box>
              <Stack pt={10} align={'center'}>
                <Heading fontSize={'2xl'} fontFamily={'lorum'} textTransform={'uppercase'} fontWeight={700}>
                  Sasta Deal
                </Heading>
                <Text fontFamily={'lorum'} fontWeight={600}>
                  It is the replica of Snapdeal.com an E-Commerce Website for Shopping of Fashion, Home and general Products.
                </Text>
                <Text color={'blue.300'} fontSize={'sm'} textTransform={'uppercase'} fontWeight={600}>
                  Tech stack: HTML | CSS | JavaScript | React | Redux-React |Chakara
                </Text>

                <Stack direction={'row'} align={'center'}>
                  <Link href={'https://github.com/bhaveshkumar96/brash-profit-9147'} target="_blank">
                    <Button
                      rounded={'full'}
                      // bg={'blue.400'}
                      // color={'white'}
                      _hover={{
                        bg: 'blue.500',
                        transform: 'scale(1.2)'
                      }}
                      leftIcon={<FaGithub size="30px" />}
                    >
                    </Button>
                  </Link>
                  <Link href={'https://snapdeal-project.vercel.app/'} target="_blank" >
                    <Button rounded={'full'} _hover={{
                      bg: 'green.500',
                      transform: 'scale(1.2)'
                    }} fontFamily={'lorum'}>Live</Button>
                  </Link>
                </Stack>
              </Stack>
            </Box>
          </Center>


        </Stack>
      </Center>
      <Center>
        <Stack direction={{ base: 'column', md: 'row' }} gap={'25px'} >

          <Center py={12} >
            <Box
              role={'group'}
              p={6}
              maxW={'500px'}
              height={'480px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.800')}
              boxShadow={'2xl'}
              rounded={'lg'}
              pos={'relative'}
              zIndex={1}
              _hover={{ transform: 'scale(1.05)', }}
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
                  filter: 'blur(45px)',
                  zIndex: -3,
                }}
                _groupHover={{
                  _after: {
                    filter: 'blur(40px)',
                    transform: 'scale(1.05)',
                  },
                }}>
                <Image
                  rounded={'lg'}
                  // height={280}
                  // width={350}
                  objectFit={'cover'}
                  src={coolMonk}
                />
              </Box>
              <Stack pt={10} align={'center'}>
                <Heading fontSize={'2xl'} textTransform={'uppercase'} fontFamily={'lorum'} fontWeight={700}>
                  Cool Monk
                </Heading>
                <Text fontWeight={600} fontFamily={'lorum'}>
                  Shop.com is the e-commerce website for buying clothes,electronics and
                  daily essentials.
                </Text>
                <Text color={'blue.300'} fontSize={'sm'} fontWeight={600} textTransform={'uppercase'} fontFamily={'lorum'}>
                  Tech stack : HTML | CSS | JavaScript
                </Text>

                <Stack direction={'row'} align={'center'}>
                  <Link href={'https://github.com/surya101294/delightful-secretary-78'} target="_blank">
                    <Button
                      rounded={'full'}
                      // bg={'blue.400'}
                      // color={'white'}
                      _hover={{
                        bg: 'blue.500',
                        transform: 'scale(1.2)'
                      }}
                      leftIcon={<FaGithub size="30px" />}
                    >
                    </Button>
                  </Link>
                  <Link href={'https://prismatic-lolly-ef78c1.netlify.app/'} target="_blank">
                    <Button rounded={'full'} _hover={{
                      bg: 'green.500',
                      transform: 'scale(1.2)'
                    }} fontFamily={'lorum'}>Live</Button>
                  </Link>
                </Stack>
              </Stack>
            </Box>
          </Center>

          <Center py={12}>
            <Box
              role={'group'}
              p={6}
              maxW={'500px'}
              height={'480px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.800')}
              boxShadow={'2xl'}
              rounded={'lg'}
              pos={'relative'}
              zIndex={1}
              _hover={{ transform: 'scale(1.05)', }}>
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
                  filter: 'blur(40px)',
                  zIndex: -1,
                }}
                _groupHover={{
                  _after: {
                    filter: 'blur(40px)',
                    transform: 'scale(1.05)',
                  },
                }}>
                <Image
                  rounded={'lg'}
                  // height={250}
                  // width={350}
                  objectFit={'cover'}
                  src={samadhanKendra}
                />
              </Box>
              <Stack pt={10} align={'center'}>
                <Heading fontSize={'2xl'} textTransform={'uppercase'} fontFamily={'lorum'} fontWeight={700}>
                  Samadhan Kendra
                </Heading>
                <Text fontFamily={'lorum'} fontWeight={600}>
                  Urban Company is an online platform where one can seek services from different professionals from plumbers to electricians to beauticians.
                </Text>
                <Text color={'blue.300'} fontSize={'sm'} textTransform={'uppercase'} fontWeight={600}>
                  Tech stack: HTML | CSS | JavaScript | React |Chakara
                </Text>

                <Stack direction={'row'} align={'center'}>
                  <Link href={'https://github.com/surya101294/craven-government-8390'} target="_blank">
                    <Button
                      rounded={'full'}
                      // bg={'blue.400'}
                      // color={'white'}
                      _hover={{
                        bg: 'blue.500',
                        transform: 'scale(1.2)'
                      }}
                      leftIcon={<FaGithub size="30px" />}
                    >
                    </Button>
                  </Link>
                  <Link href={'https://unique-longma-beb0ee.netlify.app/'} target="_blank" >
                    <Button rounded={'full'} _hover={{
                      bg: 'green.500',
                      transform: 'scale(1.2)'
                    }}>Live</Button>
                  </Link>
                </Stack>
              </Stack>
            </Box>
          </Center>

        </Stack>
      </Center>
      <Center  >
        <Stack direction={{ base: 'column', md: 'row' }} gap={'25px'} >


          <Center py={12}>
            <Box
              role={'group'}
              p={6}
              maxW={'500px'}
              height={'480px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.800')}
              boxShadow={'2xl'}
              rounded={'lg'}
              pos={'relative'}
              zIndex={1}
              _hover={{ transform: 'scale(1.05)', }}>
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
                  filter: 'blur(40px)',
                  zIndex: -3,
                }}
                _groupHover={{
                  _after: {
                    filter: 'blur(40px)',
                    transform: 'scale(1.05)',
                  },
                }}>
                <Image
                  rounded={'lg'}
                  // height={250}
                  // width={350}
                  objectFit={'cover'}
                  src={sephora}
                />
              </Box>
              <Stack pt={10} align={'center'}>
                <Heading fontSize={'2xl'} textTransform={'uppercase'} fontFamily={'lorum'} fontWeight={700}>
                  Sephora
                </Heading>
                <Text fontFamily={'lorum'} fontWeight={600}>
                  Sephora is a French multinational retailer of personal care and beauty products.
                </Text>
                <Text color={'blue.300'} fontSize={'sm'} textTransform={'uppercase'} fontWeight={600}>
                  Tech stack: HTML | CSS | JavaScript
                </Text>

                <Stack direction={'row'} align={'center'}>
                  <Link href={'https://github.com/surya101294/Sephora_website_clone'} target="_blank">
                    <Button
                      rounded={'full'}
                      // bg={'blue.400'}
                      // color={'white'}
                      _hover={{
                        bg: 'blue.500',
                        transform: 'scale(1.2)'
                      }}
                      leftIcon={<FaGithub size="30px" />}
                    >
                    </Button>
                  </Link>
                  <Link href={'https://extraordinary-blini-450159.netlify.app/'} target="_blank">
                    <Button rounded={'full'} _hover={{
                      bg: 'green.500',
                      transform: 'scale(1.2)'
                    }}>Live</Button>
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
