import logo from '../logo/pic.jpg'
import { ReactNode } from 'react';
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
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,  useColorMode,
  Center, Heading, Highlight
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { HashLink } from 'react-router-hash-link';

const Links = ['Home', 'About' ,'Skills', 'Projects', 'Contact', 'Resume'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div style={{position:'fixed', width:'100%'}} 
    display={{ base: 'none', md: 'flex' }}
    >
      <Box bg={useColorModeValue('gray.300', 'gray.900')} px={4} >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Heading as='h2' size={'lg'} paddingRight={'20px'} color={'blue.700'} ><Highlight query='S.P' styles={{ px: '1', py: '1', bg: 'blue.100', rounded: 'full', color:'blue.400' }}>S.PPokhriyal</Highlight> </Heading>
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
              {/* <Stack direction={'row'} spacing={6}> */}
              {/* <Heading as='h4' size={'md'} gap={'30px'} > */}
            <HashLink to={'#aboutpage'} smooth><Heading as='h4' size={'md'} gap={'30px'}>About</Heading></HashLink>
            <HashLink to={'#skillpage'} smooth><Heading as='h4' size={'md'} gap={'30px'}>Skill</Heading></HashLink>
            <HashLink to={'#projectpage'} smooth><Heading as='h4' size={'md'} gap={'30px'}>Project</Heading></HashLink>
            <HashLink to={'#contactpage'} smooth><Heading as='h4' size={'md'} gap={'30px'}>Contact</Heading></HashLink>
            <Link href={'https://drive.google.com/file/d/1kajrrkN5uytJDLdvc4ywOtguaGMt_dCi/view?usp=sharing'} smooth  target="_blank" ><Heading as='h4' size={'md'} color={'blue'}><Highlight query='Resume' styles={{ px: '1', py: '1', bg: '#146ebe', rounded: 'full' }}>Resume</Highlight></Heading></Link>
          {/* </Stack> */}
          {/* </Heading> */}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu gap={2}>
            <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
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
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      {/* <Box p={4}>Main Content Here</Box> */}
    </div>
  );
}