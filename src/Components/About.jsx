import logo from '../logo/pic.jpg'
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,Link , Box
} from '@chakra-ui/react';
import { MdEmail } from 'react-icons/md';
import Calender from './Calender';

export default function SplitScreen() {
  return (
    <Box boxShadow={'2xl'} width={'95%'} margin={'auto'}>
    <Heading fontSize={{ base: '3xl', md: '5xl', lg: '7xl' }} _hover={{transform: 'scale(1.05)', }}>ABOUT</Heading>
    <Stack minH={'70vh'} direction={{ base: 'column', md: 'row' }} id='aboutpage' >
      <Flex p={8} flex={1} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
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
              >
              About Me
            </Text> */}
            <br />{' '}
            <br />
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'blue.400'} lineHeight={'25px'} >
             I am a Full Stack Web Developer, passionate about building digital products that improve everyday experience for people. 
             {/* I'm always looking for better opportunity, ethical and accessible ways to solve the common problems we are faced with day-to-day life. I love to make projects which are helpful for masses and serve as a great helpful entity. */}
            </Text>{' '}
          </Heading>
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
          <Stack direction={{ base: 'column', md: 'column' }} spacing={4} justifyContent={'center'}>
          <Link href="Surya_Prakash_Pokhriyal_Resume.pdf" smooth 
              download={'Surya_Prakash_Pokhriyal_Resume.pdf'} textDecoration='null'
            >   
            <Button
              // rounded={'full'}
              bg={'blue.100'}
              // color={'white'}
              // _hover={{
              //   bg: 'blue.500',
              // }}
              variant="ghost"
              size="lg"
              isRound={true}
              _hover={{ bg: '#0D74FF', transform: 'scale(1.05)'}}
              borderRadius='full'
              >
               Download Resume
            </Button>
            </Link>
            <Button
              rounded={'full'}
              // bg={'blue.400'}
              // color={'white'}
              _hover={{
                bg: 'black.300',
              }}
              leftIcon={<MdEmail size="30px" />}
            >
              Surya101294@gmail.com
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1} justifyContent={'center'}>
        <Image
          height={'350px'}
          width={'350px'}
          alt={'Login Image'}
          objectFit={'cover'}
          _hover={{transform: 'scale(1.05)', }}
          src={logo}
        />
      </Flex>   
    </Stack>
    <Calender/>
    <br />
    <br />
    </Box>
  );
}