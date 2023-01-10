import {
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text, Link,
  Highlight
} from '@chakra-ui/react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
// import { MdEmail ,MdOutgoingMail } from 'react-icons/md';

export default function Home() {
  
  return (<Center>
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>

      <Flex flex={1} paddingTop={'50px'} justifyContent={'center'}>
        <Image
          alt={'Login Image'}
          // objectFit={'cover'}
          // borderRadius='full'
          boxSize='400px'
          height={'400px'}
          _hover={{transform: 'scale(1.05)', }}
          src={'https://prepinsta.com/wp-content/uploads/2021/06/programmer.webp'}
        />

      </Flex>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} _hover={{transform: 'scale(1.05)', }}>
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
                                //   bg: 'blue.400',
                                zIndex: -1,
                            }}>
                            Hello 👋
                        </Text> */}
            <br />{' '}
            {/* <Text color={'blue.400'} as={'span'} fontSize={{ base: 'xl', md: '2xl', lg: '4xl' }}>
                            
                            Hello 👋
                        </Text> */}
            Hello 👋
          </Heading>
          <Heading lineHeight='tall'>
            <Highlight
              query={['Surya', 'Prakash', 'Pokhriyal']}
              styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}
            >
              I'm Surya Prakash Pokhriyal
            </Highlight>
          </Heading>
          <Text fontSize={{ base: 'lg', lg: '2xl' }} color={'grey.700'}>
          Knack of building application with frontend operations
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4} paddingLeft={'30px'} align={'center'}>
            {/* <Link href={'https://github.com/surya101294'}> */}
            {/* <Link href={'https://drive.google.com/file/d/1kajrrkN5uytJDLdvc4ywOtguaGMt_dCi/view?usp=sharing'} smooth 
            
            >           */}
            {/* <a href="Surya_Prakash_Pokhriyal_Resume.pdf" download='Surya_Prakash_Pokhriyal_Resume.pdf' >
            <Button
              // rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}
              >
               Download Resume
            </Button>
            </a> */}
            {/* </Link> */}
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4} paddingLeft={'30px'} align={'center'}></Stack>
            <Link href={'https://github.com/surya101294'}>
              <Button
                variant="ghost"
                size="lg"
                isRound={true}
                _hover={{ bg: '#0D74FF' }}
                // borderRadius='full'
                boxSize='40px' leftIcon={<FaGithub size="30px" />}>  </Button>
            </Link>
            <Link href={'https://www.linkedin.com/in/surya-prakash-pokhriyal/'}>
              <Button
                variant="ghost"
                size="lg"
                isRound={true}
                _hover={{ bg: '#0D74FF' }}
                boxSize='40px' colorScheme='linkedin' leftIcon={< FaLinkedin size="30px" />}>
              </Button>
            </Link>
            <Link href={'mailto:surya101294@gmail.com'}>
              <Button
                variant="ghost"
                size="lg"
                isRound={true}
                _hover={{ bg: '#0D74FF' }}
                boxSize='40px' colorScheme='mail' leftIcon={< SiGmail size="30px" />}> </Button>
            </Link>
            {/* <Button rounded={'full'}>How It Works</Button> */}
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  </Center>
  );
}

// to image  _hover={{transform: 'scale(1.05)', }}