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
  Center,
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
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box size={'4xl'} paddingRight={'20px'}>S.P Pokhriyal</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}
              {/* <Stack direction={'row'} spacing={6}> */}
            <HashLink to={'#aboutpage'} smooth>About</HashLink>
            <HashLink to={'#skillpage'} smooth>Skill</HashLink>
            <HashLink to={'#projectpage'} smooth>Project</HashLink>
            <HashLink to={'#contactpage'} smooth>Contact</HashLink>
            <Link href={'https://drive.google.com/file/d/1kajrrkN5uytJDLdvc4ywOtguaGMt_dCi/view?usp=sharing'} smooth>Resume</Link>
          {/* </Stack> */}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
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
    </>
  );
}