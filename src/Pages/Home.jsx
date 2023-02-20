import {
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text, Link,
  Highlight, Box
} from '@chakra-ui/react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
// import { MdEmail ,MdOutgoingMail } from 'react-icons/md';
import { TypeAnimation } from 'react-type-animation';

export default function Home() {

  return (
    // <Center>
    <Box boxShadow={'2xl'} width={'100%'} margin={'auto'} id='homepage' >
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex flex={1} paddingTop={'50px'} justifyContent={'center'}>
          <Image
            alt={'Image'}
            // objectFit={'cover'}
            // borderRadius='full'
            // margin-top="30px"
            mt={'60px'}
            boxSize='420px'
            height={'450px'}
            width={'80%'}
            margin={'auto'}
            // paddingTop={'20px'}
            _hover={{ transform: 'scale(1.05)', }}
            // src={'https://prepinsta.com/wp-content/uploads/2021/06/programmer.webp'}
            src={'https://t4.ftcdn.net/jpg/05/61/86/17/360_F_561861716_VQ4qwquLrW7yyqV7pmuG4jxJIqBklsfp.jpg'}
            // src={'https://img.etimg.com/thumb/height-450,width-600,imgsize-65126,msid-88634302/.jpg'}
            // src={'https://thumbs.dreamstime.com/b/internet-information-technology-businessman-hand-showing-concept-75784736.jpg'}
            // src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn4VQH8t2WTz4MtfMxYIDz5hWpOSsprqRyT2MWBJlsNK55BCesvJrdllHsjSD8UnMoasI&usqp=CAU'}
          />

        </Flex>
        <Flex p={4} flex={1} align={'center'} justifyContent={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} _hover={{ transform: 'scale(1.05)', }}>
              <br />{' '}
              Hello 👋
            </Heading>
            <Heading lineHeight='tall'>
              <Highlight
                query={['Surya', 'Prakash', 'Pokhriyal']}
                styles={{ px: '', py: '1', rounded: 'full', bg: 'teal.500' }}
              >
                I'm Surya Prakash Pokhriyal
              </Highlight>
            </Heading>
            
            <TypeAnimation
                // Same String at the start will only be typed once, initially
              sequence={[
              'Full Stack Web Developer.',
              1000,
              'MERN Stack Web Developer.',
              1000,
              'A Tech Enthusiast.',
              1000,
              ]}
              speed={50} // Custom Speed from 1-99 - Default Speed: 40
               style={{ fontSize: ["30px"]}}
              // wrapper="span" // Animation will be rendered as a <span>
              repeat={Infinity} // Repeat this Animation Sequence infinitely
            />
            <Text fontSize={{ base: 'lg', lg: '2xl' }} color={'grey.700'} 
            fontFamily={'lorum'}
            >
              Knack of building application with frontend operations
            </Text>
            <Center>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4} paddingLeft={'30px'} align={'center'}>
              {/* <Link href={'https://github.com/surya101294'}> */}
              {/* <Link href={'https://drive.google.com/file/d/1kajrrkN5uytJDLdvc4ywOtguaGMt_dCi/view?usp=sharing'}  
            
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
              <Link href={'https://github.com/surya101294'} target="_blank">
                <Button
                  variant="ghost"
                  size="lg"
                  isround='true'
                  // bg= {'teal.500'}
                  // border={'teal.500'}
                  // _hover={{ bg: '#0D74FF' }}
                  _hover={{  bg: '#15f4ee',transform: 'scale(1.05)' }}
                  border="2px solid teal"
                  // borderRadius='full'
                  boxSize='40px' colorScheme='Github' leftIcon={<FaGithub size="30px" />}>  </Button>
              </Link>
              <Link href={'https://www.linkedin.com/in/surya-prakash-pokhriyal/' } target="_blank">
                <Button
                  variant="ghost"
                  size="lg"
                  isround='true'
                  // _hover={{ bg: '#0D74FF' }}
                  // bg= {'teal.500'}
                  _hover={{  bg: '#15f4ee',transform: 'scale(1.05)' }}
                  border="2px solid teal"
                  boxSize='40px' colorScheme='linkedin' leftIcon={< FaLinkedin size="30px" />}>
                </Button>
              </Link>
              <Link href={'mailto:surya101294@gmail.com'} target="_blank">
                <Button
                  variant="ghost"
                  size="lg"
                  isround='true'
                  // _hover={{ bg: '#0D74FF' }}
                  // bg= {'teal.500'}
                  _hover={{  bg: '#15f4ee',transform: 'scale(1.05)' }}
                  border="2px solid teal"
                  boxSize='40px' colorScheme='Gmail' leftIcon={< SiGmail size="30px" />}> </Button>
              </Link>
              {/* <Button rounded={'full'}>How It Works</Button> */}
            </Stack>
          </Center>
          </Stack>
        </Flex>
      </Stack>
      {/* </Center> */}
    </Box>
  );
}

// to image  _hover={{transform: 'scale(1.05)', }}