import logo from '../logo/pic.jpg'
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  useDisclosure,
  useColorModeValue,
  Stack, useColorMode,
  Heading, Highlight
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { AiOutlineHome, AiFillContacts, AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { GiSkills } from 'react-icons/gi';
import { FaUserAlt } from 'react-icons/fa';
import { FcFile } from 'react-icons/fc';
import { HiChatAlt2, HiHome } from 'react-icons/hi';
import { HashLink } from 'react-router-hash-link';
import sign from '../logo/sign.png'

// const Links = ['Home', 'About', 'Skills', 'Projects', 'Contact', 'Resume'];

// const NavLink = ({ children }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={'md'}
//     _hover={{
//       textDecoration: 'none',
//       bg: useColorModeValue('gray.200', 'gray.700'),
//     }}
//     href={'#'}>
//     {children}
//   </Link>
// );

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={useColorModeValue('gray.300', 'gray.900')} pos="fixed" w="100%" zIndex={2} fontFamily={'lorum'} >
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={'center'}>
          {/* <Heading as='h2' size={'lg'} paddingRight={'20px'} color={'blue.700'} ><Highlight query='S.P' styles={{ px: '1', py: '1', bg: 'blue.100', rounded: 'full', color: 'blue.400' }}>S.PPokhriyal</Highlight> </Heading> */}
          <div style={{ margin: "10px", paddingLeft: '25px' }} >
            <img src={sign} alt="pic" height={'40px'} width={'150px'} padding-left={'10px'}  />
          </div>
          <HStack
            as={'nav'}
            spacing={8}
            display={{ base: 'none', md: 'flex' }}
            gap={'30px'}
          // size={'4xl'}
          >
            {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}
            <Stack direction={'row'} spacing={6} fontFamily={'lorum'}>
              {/* <Heading as='h4' size={'md'} gap={'30px'} > */}
              <HashLink to={'#homepage'} >
                <Heading as='h6' size={'md'} color={'gray.700'} gap={'30px'} smooth="true"
                  fontFamily={'lorum'}
                  _hover={{ border: ' 2px solid gray', transform: 'scale(1.02)' }}>
                  <button><HiHome /> </button>
                  HOME
                </Heading></HashLink>
              <HashLink to={'#aboutpage'} ><Heading as='h4' color={'gray.700'} size={'md'} gap={'30px'} smooth="true" fontFamily={'lorum'} 
              _hover={{ border: ' 2px solid gray', transform: 'scale(1.02)' }}>
                <button><FaUserAlt /> </button>
                ABOUT
              </Heading></HashLink>
              <HashLink to={'#skillpage'} ><Heading as='h4' color={'gray.700'} size={'md'} gap={'30px'} fontFamily={'lorum'} smooth="true" 
              _hover={{ border: ' 2px solid gray', transform: 'scale(1.02)' }}>
                <button><GiSkills /> </button>
                SKILL
              </Heading></HashLink>
              <HashLink to={'#projectpage'} ><Heading as='h4' color={'gray.700'} size={'md'} gap={'30px'} smooth="true" fontFamily={'lorum'}
              _hover={{ border: ' 2px solid gray', transform: 'scale(1.02)' }}>
                <button><AiOutlineFundProjectionScreen /> </button>
                PROJECT
              </Heading></HashLink>
              <HashLink to={'#contactpage'} ><Heading as='h4' color={'gray.700'} size={'md'} gap={'30px'} fontFamily={'lorum'} smooth="true" 
              _hover={{ border: ' 2px solid gray', transform: 'scale(1.02)' }}>
                <button><HiChatAlt2 /> </button>
                CONTACT
              </Heading></HashLink>


              {/* <Link
                // href="Surya_Prakash_Pokhriyal_Resume.pdf"
                href={'https://drive.google.com/file/d/1kajrrkN5uytJDLdvc4ywOtguaGMt_dCi/view?usp=sharing'}
                smooth="true"

                download={'Surya_Prakash_Pokhriyal_Resume.pdf'}
                textDecoration='null'
                target="_blank"
              > */}
              <a href={"Surya_Prakash_Pokhriyal_Resume.pdf"} smooth="true"
               onClick={()=>window.open("https://drive.google.com/file/d/1kajrrkN5uytJDLdvc4ywOtguaGMt_dCi/view?usp=sharing")} 
               download={'Surya_Prakash_Pokhriyal_Resume.pdf'} 
               textDecoration='null' 
               target="_blank"
              >
                <Heading as='h4' size={'md'} gap={'30px'} fontFamily={'lorum'} smooth="true" color={'teal'}
                  _hover={{ border: ' 2px solid teal', transform: 'scale(1.10)' }}>
                <button><FcFile /> </button>
                RESUME
              </Heading>
                {/* <Heading as='h4' size={'md'} color={'teal.500'}>
                  <Highlight query='Resume' styles={{ px: '1', py: '1', bg: 'teal.500', rounded: 'full' }} smooth="true" fontFamily={'lorum'}>
                    RESUME
                  </Highlight>
                </Heading> */}
              </a>
            </Stack>
            {/* </Heading> */}
          </HStack>
        </HStack>
        <Flex alignItems={'center'} paddingRight={'20px'}>
          <Menu gap={3} >
            <Button onClick={toggleColorMode} rounded={'full'} marginRight={'30px'} bgColor={'teal.600'}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
            <MenuButton
              as={Button}
              rounded={'full'}
              variant={'link'}
              cursor={'pointer'}
            // minW={0}
            >
              <Avatar
                //  height={'200px'} width={'200px'}
                size={'sm'}
                src={logo}
              />
            </MenuButton>
            {/* <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList> */}
          </Menu>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {/* {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))} */}
            <HashLink to={'#homepage'} ><Heading as='h4' size={'md'} gap={'30px'} smooth="true" >
              <button><HiHome /> </button>
              Home
            </Heading></HashLink>
            <HashLink to={'#aboutpage'} ><Heading as='h4' size={'md'} gap={'30px'} smooth="true" >
              <button><FaUserAlt />  </button>
              About
            </Heading></HashLink>
            <HashLink to={'#skillpage'} ><Heading as='h4' size={'md'} gap={'30px'} smooth="true" >
              <button><GiSkills /> </button>
              Skill
            </Heading></HashLink>
            <HashLink to={'#projectpage'} ><Heading as='h4' size={'md'} gap={'30px'} smooth="true" >
              <button><AiOutlineFundProjectionScreen /> </button>
              Project
            </Heading></HashLink>
            <HashLink to={'#contactpage'} ><Heading as='h4' size={'md'} gap={'30px'} smooth="true" >
              <button><HiChatAlt2 /> </button>
              Contact
            </Heading></HashLink>
            <Link href={'https://drive.google.com/file/d/1kajrrkN5uytJDLdvc4ywOtguaGMt_dCi/view?usp=sharing'} target="_blank" ><Heading as='h4' size={'md'} color={'blue'}><Highlight query='Resume' styles={{ px: '1', py: '1', bg: '#146ebe', rounded: 'full' }} smooth="true" >
              Resume
            </Highlight></Heading></Link>
          </Stack>
        </Box>
      ) : null}
    </Box>
    // </div>
  );
}