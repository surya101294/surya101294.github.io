import { useRef, useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import {
  useToast,
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Link, Center
} from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdOutlineEmail,
} from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';

import emailjs from "@emailjs/browser";

export default function Contact() {
  const toast = useToast()

  const [name, setName] = useState(false)
  const [email, setEmail] = useState(false)
  const [msg, setMsg] = useState(false)

  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("clicked")

    if (name && email && msg) {
      emailjs.sendForm(
        "service_95mup4r",
        "template_vr2k5q1",  //template id
        form.current,
        "OAAgS4baLv5nwlbcO"   //user id- api
      )
      // .then(
      //   (result) => {
      //     alert("Message sent successfully");
      //     console.log(result.text);
      //   })
      // .catch(error) => {
      //   alert("Failed to send the msg");
      //   console.log(error.text);
      // }  
    }

    {
      name && email && msg ?
        toast({
          title: 'Message Delievered',
          description: "Thankyou for Contacting..",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })


        :
        toast({
          title: 'Please Fill the details',
          description: "",
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
    }
    setName("")
    setEmail("")
    setMsg("")
  }
  return (
    <Container maxW="full" mt={0} centerContent overflow="hidden" id='contactpage' boxShadow={'2xl'} width={'95%'} margin={'auto'}
      fontFamily={'lorum'} paddingTop={'40px'}>
      <Flex>
        <Box
          _hover={{ transform: 'scale(1.01)', }}
          // bg="#02054B"
          border={'2px'}
          borderColor={'blue.200'}
          color="black"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}>
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading fontFamily={'lorum'}
                    _hover={{ transform: 'scale(1.05)' }}>Get In Touch</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} fontFamily={'lorum'} color="gray.500">
                    Got a project?<br /> Reach out and let's work together on something exciting.<br />
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <Center>
                      <VStack pl={0} spacing={3} alignItems="flex-start" >
                        <a href="tel:+91-7503766953">
                          <Button
                            size="md"
                            height="48px"
                            width="200px"
                            variant="ghost"
                            // color="#DCE2FF"
                            color="black"
                            _hover={{ border: '2px solid #15f4ee', transform: 'scale(1.05)' }}
                            // borderColor={'#15f4ee'}
                            // borderWidth='2px' border: '2px solid #1C6FEB'
                            leftIcon={<MdPhone color="#1970F1" size="20px" />}
                            fontFamily={'lorum'}>
                            +91-7503766953
                          </Button>
                        </a>
                        <Link href={'mailto:surya101294@gmail.com'} target="_blank">
                          <Button
                            size="md"
                            height="48px"
                            width="200px"
                            variant="ghost"
                            // color="#DCE2FF"
                            color="black"
                            _hover={{ border: '2px solid #15f4ee', transform: 'scale(1.05)' }}
                            leftIcon={<MdEmail color="#1970F1" size="20px" />}
                            fontFamily={'lorum'}>
                            surya101294@gmail.com
                          </Button>
                        </Link>
                        < a href='https://www.google.com/maps/place/Lajpat+Nagar,+Sector+4,+Rajendra+Nagar,+Ghaziabad,+Uttar+Pradesh/@28.6833364,77.3641919,16z/data=!3m1!4b1!4m5!3m4!1s0x390cfa7d62d07ecd:0x21f2b62ddb737818!8m2!3d28.6825594!4d77.3690875' target="_blank" rel="noreferrer">
                          <Button
                            size="md"
                            height="48px"
                            width="200px"
                            variant="ghost"
                            color="black"
                            _hover={{ border: '2px solid #15f4ee', transform: 'scale(1.05)' }}
                            leftIcon={<MdLocationOn color="#1970F1" size="20px" />}
                            fontFamily={'lorum'}>
                            Ghaziabad, UttarPradesh
                          </Button>
                        </a>
                      </VStack>
                    </Center>
                  </Box>
                  {/* <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start">
                    <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<MdFacebook size="28px" />}
                    />
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<BsGithub size="28px" />}
                    />
                    <IconButton
                      aria-label="discord"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<BsDiscord size="28px" />}
                    />
                  </HStack> */}
                  <Center>
                    <HStack direction={{ base: 'column', md: 'row' }} spacing={4} paddingLeft={'10px'} align={'center'}>
                      {/* <Link href={'https://github.com/surya101294'}> */}
                      <Link href="fw21_0842-Surya-Prakash-Pokhriyal-Resume.pdf" smooth="true"
                        download={'fw21_0842-Surya-Prakash-Pokhriyal-Resume.pdf'} textDecoration='null'
                      >
                        <a href={"fw21_0842-Surya-Prakash-Pokhriyal-Resume.pdf"} smooth="true"
                          onClick={() => window.open("fw21_0842-Surya-Prakash-Pokhriyal-Resume.pdf")}
                          download={'fw21_0842-Surya-Prakash-Pokhriyal-Resume.pdf'}
                          textDecoration='null'
                          target="_blank" rel="noreferrer"
                        >
                          <Button
                            // rounded={'full'}
                            bg={'blue.400'}
                            color={'white'}
                            _hover={{ bg: '#15f4ee', transform: 'scale(1.05)' }}
                            borderColor={'#15f4ee'}
                            borderWidth='2px'
                            fontFamily={'lorum'}>
                            Resume
                          </Button>
                        </a>
                      </Link>
                      <Link href={'https://github.com/surya101294'} target="_blank">
                        <Button
                          variant="ghost"
                          size="lg"
                          isround="true"
                          _hover={{ bg: '#15f4ee', transform: 'scale(1.05)' }}
                          // borderRadius='full'
                          borderColor={'#15f4ee'}
                          borderWidth='1px'
                          boxSize='40px' leftIcon={<FaGithub size="30px" />}>  </Button>
                      </Link>
                      <Link href={'https://www.linkedin.com/in/surya-prakash-pokhriyal/'} target="_blank">
                        <Button
                          variant="ghost"
                          size="lg"
                          isround="true"
                          _hover={{ bg: '#15f4ee', transform: 'scale(1.05)' }}
                          borderColor={'#15f4ee'}
                          borderWidth='1px'
                          boxSize='40px' colorScheme='linkedin' leftIcon={< FaLinkedin size="30px" />} >
                        </Button>
                      </Link>
                      <Link href={'mailto:surya101294@gmail.com'} target="_blank">
                        <Button
                          variant="ghost"
                          size="lg"
                          isround="true"
                          _hover={{ bg: '#15f4ee', transform: 'scale(1.05)' }}
                          borderColor={'#15f4ee'}
                          borderWidth='1px'
                          boxSize='40px' colorScheme='mail' leftIcon={< SiGmail size="30px" />}> </Button>
                      </Link>
                      {/* <Button rounded={'full'}>How It Works</Button> */}
                    </HStack>
                  </Center>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5} fontFamily={'lorum'}>
                      <form onSubmit={handleSubmit}
                        ref={form}>
                        <FormControl id="name" isRequired>
                          <FormLabel >Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input type="text" size="md" name='user_name'
                              isRequired onChange={() => setName(true)} />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name" isRequired>
                          <FormLabel>Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />
                            <Input type="text" size="md" name='user_email'
                              isRequired onChange={() => setEmail(true)} />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name" isRequired>
                          <FormLabel  >Message</FormLabel>
                          <Input
                            borderColor="gray.300"
                            height={'120px'}
                            _hover={{
                              borderRadius: 'gray.300',
                            }}
                            name='message'
                            onChange={() => setMsg(true)}
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button
                            variant="solid"
                            bg="#0D74FF"
                            color="white"
                            _hover={{ bg: '#15f4ee', transform: 'scale(1.05)' }}
                            borderColor={'#15f4ee'}
                            borderWidth='2px'
                            onClick={handleSubmit}
                            ref={form}
                          >
                            Send Message
                          </Button>
                        </FormControl>
                      </form>
                    </VStack>

                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
