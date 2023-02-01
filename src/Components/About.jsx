import logo from '../logo/pic.jpg'
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue, Link, Box,Center, 
} from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons'
import Calender from './Calender';
import { MdEmail } from 'react-icons/md';
import { FaDownload,FaArrowCircleRight } from 'react-icons/fa';
import Stats from './Stats';

export default function SplitScreen() {
  return (
    <Box boxShadow={'2xl'} width={'95%'} margin={'auto'} fontFamily={'lorum'} id='aboutpage'>
      <Heading fontSize={{ base: '3xl', md: '5xl', lg: '7xl' }} _hover={{ transform: 'scale(1.05)', }} fontFamily={'lorum'}>ABOUT</Heading>
      <hr />
      <Stack minH={'70vh'} direction={{ base: 'column', md: 'row' }}  >
        <Flex p={8} flex={1} justify={'center'}>
          <Stack  w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            fontFamily={'lorum'}
            >
              {/* <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                  bg: 'blue.400',
                zIndex: -1,
              }}
              _hover={{transform: 'scale(1.05)', }}
              fontSize={{ base: 'md', lg: 'lg' }}

              About Me
            </Text> */}
              
              <Text fontSize={{ base: 'md', lg: 'lg' }} color={'blue.400'} lineHeight={'25px'} fontFamily={'lorum'}>
                I am a Full Stack Web Developer, passionate about building digital products that improve everyday experience for people.
              </Text>{' '}
            </Heading>
            <Text fontFamily={'lorum'} fontSize={{ base: 'md', lg: 'lg' }}>
            <ArrowRightIcon/>  Currently pursuing web development course from Masai School and ready to work.</Text>
            <Text fontFamily={'lorum'} fontSize={{ base: 'md', lg: 'lg' }}>
              <ArrowRightIcon/>  Have an experience of 1200+ hours of coding and 300+ hours of data structures and algorithms.</Text>
              <Text fontFamily={'lorum'} fontSize={{ base: 'md', lg: 'lg' }}>
              <ArrowRightIcon/>  Hands-on Experience of more than 4+ year in Automotive Industry.</Text>
            {/* <Button
              variant="ghost"
              size="lg"
              isRound={true}
              _hover={{ bg: '#0D74FF' }}
              borderRadius='full'
              boxSize='40px' leftIcon={<MdEmail size="30px" />}> Surya101294@gmail.com </Button>                       
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'} leftIcon={<MdEmail size="30px" />}>
            Surya101294@gmail.com
            </Text> */}
            <Center>
            <Stack direction={{ base: 'column', md: 'column' }} spacing={4} justifyContent={'center'}>
              {/* <Link href="Surya_Prakash_Pokhriyal_Resume.pdf" smooth="true" */}
              <a href={"Surya_Prakash_Pokhriyal_Resume.pdf"} smooth="true"
               onClick={()=>window.open("https://drive.google.com/file/d/1kajrrkN5uytJDLdvc4ywOtguaGMt_dCi/view?usp=sharing")} 
               download={'Surya_Prakash_Pokhriyal_Resume.pdf'} textDecoration='null' target="_blank"
              >
                <Button
                  // rounded={'full'}
                  bg={'#15f4ee'}
                  // color={'white'}
                  // _hover=fontFamily={'lorum'}{{
                  //   bg: 'blue.500',
                  // }}
                  variant="ghost"
                  size="lg"
                  isround="true"
                  _hover={{ bg: '#15f4ee', transform: 'scale(1.05)', border:'3px solid #15f4ee' }}
                    borderColor={'#15f4ee'}
                  borderWidth='3px'
                  borderRadius='full'
                  fontFamily={'lorum'}
                
                  // onClick={()=>window.open('https://drive.google.com/file/d/1kajrrkN5uytJDLdvc4ywOtguaGMt_dCi/view?usp=sharing')} 
               
                >
                 <FaDownload size="25px" />  Download Resume
                </Button>
              </a>
              <Link href={'mailto:surya101294@gmail.com'} target="_blank">
              <Button
                rounded={'full'}
                // bg={'blue.400'}
                // color={'white'}
                _hover={{ bg: '#15f4ee', transform: 'scale(1.05)' }}
                leftIcon={<MdEmail size="30px" />}
                fontFamily={'lorum'}
                width={'300px'}
              >
                Surya101294@gmail.com
              </Button>  
              </Link>            
            </Stack>
            </Center>
          </Stack>
        </Flex>
        <Flex flex={1} justifyContent={'center'}>
          <Image
            height={'350px'}
            width={'350px'}
            alt={'Login Image'}
            objectFit={'cover'}
            _hover={{ transform: 'scale(1.05)', }}
            src={logo}
          />
        </Flex>
      </Stack>
      <Text fontSize={{ base: 'md', lg: '3xl' }} color={'gray.800'} p={4} fontFamily={'lorum'} >Github Statistics : </Text>
      <Calender />
      <Stats />
      <br />
      <br />
    </Box>
  );
}