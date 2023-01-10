import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useToast, Stack, Link
} from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdOutlineEmail,
} from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';
import { useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
export default function Contact() {
  const toast = useToast()

  const [name, setName] = useState(false)
  const [email, setEmail] = useState(false)
  const [msg, setMsg] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("clicked")

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
  // bg="#9DC4FB"
  return (
    <Container bg='#9DC4FB' maxW="full" mt={0} centerContent overflow="hidden" id='contactpage' >
      <Flex>
        <Box
        _hover={{transform: 'scale(1.01)', }}
          bg="#02054B"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}>
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Get In Touch</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    Got a project?<br /> Reach out and let's work together on something exciting.<br />
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdPhone color="#1970F1" size="20px" />}>
                        +91-7503766953
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdEmail color="#1970F1" size="20px" />}>
                        surya101294@gmail.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
                        Ghaziabad, UttarPradesh, India
                      </Button>
                    </VStack>
                  </Box>
                  <Stack direction={{ base: 'column', md: 'row' }} spacing={4} paddingLeft={'30px'} align={'center'}>
                    {/* <Link href={'https://github.com/surya101294'}> */}
                    <Button
                      // rounded={'full'}
                      bg={'blue.400'}
                      color={'white'}
                      _hover={{
                        bg: 'blue.500',
                      }}>
                      Resume
                    </Button>
                    {/* </Link> */}
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
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name" isRequired>
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7" >
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input type="text" size="md" isRequired onChange={() => setName(true)} />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name" isRequired>
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                          />
                          <Input type="text" size="md" isRequired onChange={() => setEmail(true)} />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name" isRequired>
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: 'gray.300',

                          }}
                          placeholder="message" onChange={() => setMsg(true)}
                        />
                      </FormControl>
                      <FormControl id="name" >
                        <Button
                          variant="solid"
                          bg="#0D74FF"
                          color="white"
                          _hover={{}}
                          onClick={handleSubmit}  >
                          Send Message
                        </Button>
                      </FormControl>
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