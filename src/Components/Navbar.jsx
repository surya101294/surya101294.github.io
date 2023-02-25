import logo from '../logo/pic.png'
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  useDisclosure,
  useColorModeValue,
  Stack, useColorMode,
  Heading
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
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
    <Box bg={useColorModeValue('gray.200', 'gray.500')} pos="fixed" w="100%" zIndex={2} fontFamily={'lorum'} >
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={'center'}  >
          {/* <Heading as='h2' size={'lg'} paddingRight={'20px'} color={'blue.700'} ><Highlight query='S.P' styles={{ px: '1', py: '1', bg: 'blue.100', rounded: 'full', color: 'blue.400' }}>S.PPokhriyal</Highlight> </Heading> */}
          <div style={{ margin: "10px", paddingLeft: '25px' }} >
            <img
              src={sign}
              alt="pic" height={'40px'} width={'150px'} padding-left={'10px'} />
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
              <HashLink to={'#homepage'} >
                <Heading size={'sm'} color={'gray.700'} gap={'30px'} smooth="true"
                  fontFamily={'lorum'}
                  _hover={{ transform: 'scale(1.03)' }}>
                  <button><HiHome /> </button>
                  HOME
                </Heading></HashLink>
              <HashLink to={'#aboutpage'} ><Heading color={'gray.700'} size={'sm'} gap={'30px'} smooth="true" fontFamily={'lorum'}
                _hover={{ transform: 'scale(1.03)' }}>
                <button><FaUserAlt /> </button>
                ABOUT
              </Heading></HashLink>
              <HashLink to={'#skillpage'} ><Heading color={'gray.700'} size={'sm'} gap={'30px'} fontFamily={'lorum'} smooth="true"
                _hover={{ transform: 'scale(1.03)' }}>
                <button><GiSkills /> </button>
                SKILL
              </Heading></HashLink>
              <HashLink to={'#projectpage'} ><Heading color={'gray.700'} size={'sm'} gap={'30px'} smooth="true" fontFamily={'lorum'}
                _hover={{ transform: 'scale(1.03)' }}>
                <button><AiOutlineFundProjectionScreen /> </button>
                PROJECT
              </Heading></HashLink>
              <HashLink to={'#contactpage'} ><Heading color={'gray.700'} size={'sm'} gap={'30px'} fontFamily={'lorum'} smooth="true"
                _hover={{ transform: 'scale(1.03)' }}>
                <button><HiChatAlt2 /> </button>
                CONTACT
              </Heading></HashLink>

              <a href={"Surya_Prakash_Pokhriyal_Resume.pdf"} smooth="true"
                onClick={() => window.open("Surya_Prakash_Pokhriyal_Resume.pdf")}
                download={'Surya_Prakash_Pokhriyal_Resume.pdf'}
                textDecoration='null'
                target="_blank" rel="noreferrer"
              >
                <Heading size={'sm'} gap={'30px'} fontFamily={'lorum'} smooth="true" color={'teal'}
                  _hover={{ transform: 'scale(1.10)' }}>
                  <button><FcFile /> </button>
                  RESUME
                </Heading>
              </a>
            </Stack>
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
              // src={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fdribbble.com%2Fshots%2F3906266-S-Tech-Logo-Icons&psig=AOvVaw2mLck0xF43DNIzDp7hxL-M&ust=1675370791557000&source=images&cd=vfe&ved=2ahUKEwia77nYmPX8AhW8wjgGHbbiBMgQjRx6BAgAEAo"}
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
        <Box pb={4} display={{ md: 'none' }} >
          <Stack as={'nav'} spacing={4} onClick={isOpen ? onClose : onOpen} >
            <HashLink to={'#homepage'} >
              <Heading size={'md'} color={'gray.700'} gap={'30px'} smooth="true"
                fontFamily={'lorum'}
                _hover={{ transform: 'scale(1.01)' }}>
                <button ><HiHome /> </button>
                HOME
              </Heading></HashLink>
            <HashLink to={'#aboutpage'} ><Heading color={'gray.700'} size={'md'} gap={'30px'} smooth="true" fontFamily={'lorum'}
              _hover={{ transform: 'scale(1.01)' }}>
              <button ><FaUserAlt /> </button>
              ABOUT
            </Heading></HashLink>
            <HashLink to={'#skillpage'} ><Heading color={'gray.700'} size={'md'} gap={'30px'} fontFamily={'lorum'} smooth="true"
              _hover={{ transform: 'scale(1.01)' }}>
              <button ><GiSkills /> </button>
              SKILL
            </Heading></HashLink>
            <HashLink to={'#projectpage'} ><Heading color={'gray.700'} size={'md'} gap={'30px'} smooth="true" fontFamily={'lorum'}
              _hover={{ transform: 'scale(1.01)' }}>
              <button ><AiOutlineFundProjectionScreen /> </button>
              PROJECT
            </Heading></HashLink>
            <HashLink to={'#contactpage'} ><Heading color={'gray.700'} size={'md'} gap={'30px'} fontFamily={'lorum'} smooth="true"
              _hover={{ transform: 'scale(1.01)' }}>
              <button ><HiChatAlt2 /> </button>
              CONTACT
            </Heading></HashLink>

            <a href={"Surya_Prakash_Pokhriyal_Resume.pdf"} smooth="true"
              onClick={() => window.open("Surya_Prakash_Pokhriyal_Resume.pdf")}
              download={'Surya_Prakash_Pokhriyal_Resume.pdf'}
              textDecoration='null'
              target="_blank" rel="noreferrer"
            >
              <Heading size={'md'} gap={'30px'} fontFamily={'lorum'} smooth="true" color={'teal'}
                _hover={{ transform: 'scale(1.10)' }}>
                <button ><FcFile /> </button>
                RESUME
              </Heading>

            </a>
          </Stack>
        </Box>
      ) : null}
    </Box>
    // </div>
  );
}