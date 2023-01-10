import logo from '../logo/pic.jpg'
import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

// const NavLink = () => (
//   <Link
//     px={2}
//     py={1}
//     rounded={'md'}
//     _hover={{
//       textDecoration: 'none',
//       bg: useColorModeValue('gray.200', 'gray.700'),
//     }}
//     href={'#'}>
//   </Link>
// );

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    // <div style={{positon:'fixed'}}>
    <div>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} positon={'fixed'}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-around'} paddingLeft={'20px'} paddingRight={'20px'}>
          <Box size={'4xl'} paddingRight={'20px'}>  S.P Pokhriyal</Box>
          {/* <img height={'30px'} width={'120px'} src={logo} alt="logo" /> */}
          <Box>About</Box>
          <Box>Project</Box>
          <Box>Contact</Box>
          <Box>Resume</Box>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={6}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar height={'30px'} width={'50px'}
                    size={'sm'}
                    src={logo}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar height={'200px'} width={'200px'}
                      size={'sm'}
                      src={logo}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Home</p>
                  </Center>
                  {/* <br /> */}
                  <MenuDivider />
                  <Link to={'/about'}>
                  <MenuItem>About Me</MenuItem>
                  </Link> 
                  <MenuItem>Skills</MenuItem>
                  <MenuItem>Project</MenuItem>
                  <MenuItem>Contact</MenuItem>
                  <MenuItem>Resume</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </div>
  );
}

// Home, About Me, Skills, Project, Contact & Resume