import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { ReactNode } from 'react';
import { HashLink } from 'react-router-hash-link';

export default function Footer() {
  return (
    <Box
      // bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')} fontFamily={'lorum'}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}>
        {/* <Logo /> */}
        <Stack direction={'row'} spacing={6}>
          <HashLink to={'#homepage'} >Home</HashLink>
          <HashLink to={'#aboutpage'} >About</HashLink>
          <HashLink to={'#skillpage'}>Skill</HashLink>
          <HashLink to={'#projectpage'}>Project</HashLink>
          <HashLink to={'#contactpage'}>Contact</HashLink>
          <a href={"Surya_Prakash_Pokhriyal_Resume.pdf"} smooth="true"
            onClick={() => window.open("https://drive.google.com/file/d/1kajrrkN5uytJDLdvc4ywOtguaGMt_dCi/view?usp=sharing")}
            download={'Surya_Prakash_Pokhriyal_Resume.pdf'}
            textDecoration='null'
            target="_blank"
          >
            Resume
          </a>
          {/* <HashLink to={'#resume'}></HashLink> */}
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        bg='#02054b'
        color={'white'}
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
          fontFamily={'lorum'}
        >
          <Text fontFamily={'lorum'}>Designed & Built by Surya Prakash Pokhriyal, © 2023 All rights reserved</Text>
          {/* <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
            </Stack> */}
        </Container>
      </Box>
    </Box>
  );
}