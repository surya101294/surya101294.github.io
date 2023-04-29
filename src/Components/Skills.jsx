import { Box, Center, Heading, Tabs, TabList, TabPanels, Tab, TabPanel, Image, Tooltip, useColorModeValue, useColorMode, Text } from '@chakra-ui/react';
import React from 'react'
import { Wrap, WrapItem } from '@chakra-ui/react'
// import { CONFETTI_DARK, CONFETTI_LIGHT } from '../bg';


const all = [
  {
    "Image": "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    "name": "HTML"
  },
  {
    "Image": "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    "name": "CSS"
  },
  {
    "Image": "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    "name": "JavaScript"
  },
  {
    "Image": "https://chiranjeev-thapliyal.vercel.app/svg/reactjs.svg",
    "name": "React"
  },
  {
    "Image": "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
    "name": "Redux"
  },
  {
    "Image": "https://profilinator.rishav.dev/skills-assets/chakraui.png",
    "name": "Chakra UI"
  },
  {
    "Image": "https://profilinator.rishav.dev/skills-assets/mui.png",
    "name": "Material UI"
  },
  {
    "Image": "https://vasterra.com/blog/wp-content/uploads/2021/08/Tailwind-img.png",
    "name": "Tailwind CSS"
  },
  {
    "Image": "https://profilinator.rishav.dev/skills-assets/typescript-original.svg",
    "name": "TypeScript"
  },
  {
    "Image": "https://icons.getbootstrap.com/assets/img/icons-hero.png",
    "name": "Bootstrap"
  },
  // {
  //   "Image": "https://profilinator.rishav.dev/skills-assets/nextjs.png",
  //   "name": "NextJS"
  // },
  {
    "Image": "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/node-js-icon.svg",
    "name": "NodeJS"
  },
  {
    "Image": "https://cdn.iconscout.com/icon/free/png-256/mongodb-3629020-3030245.png?f=webp&w=128",
    "name": "MongoDB"
  },
  {
    "Image": "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/express-js-icon.svg",
    "name": "Express"
  },
  {
    "Image": "https://blog.theodo.com/static/a7a48712e6f25b8f1f78ffc12ccd8413/46604/parse-1.png",
    "name": "Parse server"
  },
  {
    "Image": "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    "name": "Postman"
  },
  {
    "Image": "https://sujjwal21.github.io/static/media/github.3b9e32903aa89111875d.png",
    "name": "Github"
  },
  {
    "Image": "https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg",
    "name": "Git"
  },
  {
    "Image": "https://www.svgrepo.com/show/342347/visual-studio-code.svg",
    "name": "VScode"
  },
  {
    "Image": "https://cdn.iconscout.com/icon/free/png-256/netlify-3628945-3030170.png?f=avif&w=128",
    "name": "Netlify"
  },
  {
    "Image": "https://th.bing.com/th/id/R.55bc7de5fbee3567ea51a2b146057ccb?rik=FS1Xk2gxsTyIuw&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_260234.png&ehk=RMqSsG5mX%2fU8dVGTgz7ObsPkayg3cpHbXlBOJEPwBFM%3d&risl=&pid=ImgRaw&r=0",
    "name": "Vercel"
  },
  {
    "Image": "https://static-blog.crozdesk.com/wp-content/uploads/2015/09/23114952/canva-logo.png",
    "name": "Canva"
  },
  {
    "Image": "https://www.cyclic.sh/images/cyclic-logo.png",
    "name": "Cyclic"
  },
  {
    "Image": "https://www.cypress.io/images/layouts/navbar-brand.svg",
    "name": "Cypress"
  }
]

const Frontend = [
  {
    "Image": "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    "name": "HTML"
  },
  {
    "Image": "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    "name": "CSS"
  },
  {
    "Image": "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    "name": "JavaScript"
  },
  {
    "Image": "https://chiranjeev-thapliyal.vercel.app/svg/reactjs.svg",
    "name": "React"
  },
  {
    "Image": "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
    "name": "Redux"
  },
  {
    "Image": "https://profilinator.rishav.dev/skills-assets/chakraui.png",
    "name": "Chakra UI"
  },
  {
    "Image": "https://profilinator.rishav.dev/skills-assets/mui.png",
    "name": "Material UI"
  },
  {
    "Image": "https://vasterra.com/blog/wp-content/uploads/2021/08/Tailwind-img.png",
    "name": "Tailwind CSS"
  },
  {
    "Image": "https://profilinator.rishav.dev/skills-assets/typescript-original.svg",
    "name": "TypeScript"
  },
  // {
  //   "Image": "https://profilinator.rishav.dev/skills-assets/nextjs.png",
  //   "name": "NextJS"
  // },
  {
    "Image": "https://icons.getbootstrap.com/assets/img/icons-hero.png",
    "name": "Bootstrap"
  }
];

const Backend = [
  {
    "Image": "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/node-js-icon.svg",
    "name": "NodeJS"
  },
  {
    "Image": "https://cdn.iconscout.com/icon/free/png-256/mongodb-3629020-3030245.png?f=webp&w=128",
    "name": "MongoDB"
  },
  {
    "Image": "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/express-js-icon.svg",
    "name": "Express"
  },
  {
    "Image": "https://blog.theodo.com/static/a7a48712e6f25b8f1f78ffc12ccd8413/46604/parse-1.png",
    "name": "Parse server"
  },
  {
    "Image": "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    "name": "Postman"
  }
]

const tools = [
  {
    "Image": "https://sujjwal21.github.io/static/media/github.3b9e32903aa89111875d.png",
    "name": "Github"
  },
  {
    "Image": "https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg",
    "name": "Git"
  },
  {
    "Image": "https://www.svgrepo.com/show/342347/visual-studio-code.svg",
    "name": "VScode"
  },
  {
    "Image": "https://cdn.iconscout.com/icon/free/png-256/netlify-3628945-3030170.png?f=avif&w=128",
    "name": "Netlify"
  },
  {
    "Image": "https://static-blog.crozdesk.com/wp-content/uploads/2015/09/23114952/canva-logo.png",
    "name": "Canva"
  },
  {
    "Image": "https://www.cyclic.sh/images/cyclic-logo.png",
    "name": "Cyclic"
  },
  {
    "Image": "https://www.cypress.io/images/layouts/navbar-brand.svg",
    "name": "Cypress"
  },
  {
    // "Image": "https://www.svgrepo.com/show/327408/logo-vercel.svg",
    "Image": "https://th.bing.com/th/id/R.55bc7de5fbee3567ea51a2b146057ccb?rik=FS1Xk2gxsTyIuw&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_260234.png&ehk=RMqSsG5mX%2fU8dVGTgz7ObsPkayg3cpHbXlBOJEPwBFM%3d&risl=&pid=ImgRaw&r=0",
    "name": "Vercel"
  }
]

const Skills = () => {
  const { colorMode } = useColorMode();
  return (
    <
      Box id="skillpage"
      // py='65px'
      // bg={useColorModeValue('purple.100', 'blue.900')}
      // css={{
      // backgroundImage: useColorModeValue(CONFETTI_LIGHT, CONFETTI_DARK),
      // backgroundAttachment: 'fixed',
      // }}
      borderTopRightRadius='full'
      data-aos="fade-right"
      data-aos-duration="2000"
    // color={colorMode === 'light' ? '#454360' : '#cdcdff'}
    >
      <Text >
        <Heading fontSize={{ base: 'md', md: '5xl', lg: '7xl' }} _hover={{ transform: 'scale(1.05)', }} fontFamily={'lorum'}>SKILLS</Heading>
        <hr />
        <Box p='5%'>
          <Tabs
            variant='soft-rounded'
            colorScheme='green'
          // bgColor={colorMode === 'light' ? '#454360' : '#cdcdff'}
          // p='20px'
          >
            <TabList
              pb='3%'
              justifyContent='center'
              fontSize={'md'}
            >
              <Tab>All</Tab>
              <Tab>Frontend</Tab>
              <Tab>Backend</Tab>
              <Tab>Tools</Tab>
            </TabList>
            <TabPanels>

              {/* All */}
              <TabPanel>
                <Wrap spacing='60px' justify='center'>
                  {
                    all.map(e => (
                      <WrapItem  >
                        <Tooltip hasArrow label={e.name} placement='bottom'>
                          <Center  >
                            <Box bgColor='blackAlpha.200' boxShadow={'2xl'}>
                              <Image boxSize={{ base: '60px', md: '90px', lg: '120px' }} _hover={{
                                bg: 'white', paddingBottom: '10px', transform: 'scale(1.05)'
                              }}
                                src={e.Image}
                              />
                              <Text fontSize={{ base: 'sm', md: 'md', lg: 'xl' }} as='b' fontFamily={'lorum'} >{e.name}</Text>
                            </Box>
                          </Center>
                        </Tooltip>
                      </WrapItem >
                    ))
                  }
                </Wrap>
              </TabPanel>

              {/* Frontend */}
              <TabPanel>
                <Wrap spacing='60px' justify='center'>
                  {
                    Frontend.map(e => (
                      <WrapItem >
                        <Tooltip hasArrow label={e.name} placement='bottom'>
                          <Center >
                            <Box bgColor='blackAlpha.200' boxShadow={'2xl'}>
                              <Image boxSize={{ base: '60px', md: '90px', lg: '120px' }} _hover={{
                                bg: 'white', paddingBottom: '10px', transform: 'scale(1.05)'
                              }}
                                src={e.Image}
                              />
                              <Text fontSize={{ base: 'sm', md: 'md', lg: 'xl' }} as='b' fontFamily={'lorum'} >{e.name}</Text>
                            </Box>
                          </Center>
                        </Tooltip>
                      </WrapItem >
                    ))
                  }
                </Wrap>
              </TabPanel>

              {/* Backend */}
              <TabPanel>
                <Wrap spacing='60px' justify='center'>
                  {
                    Backend.map(e => (
                      <WrapItem  >
                        <Tooltip hasArrow label={e.name} placement='bottom'>
                          <Center>
                            <Box bgColor='blackAlpha.200' boxShadow={'2xl'}>
                              <Image boxSize={{ base: '60px', md: '90px', lg: '120px' }} _hover={{
                                bg: 'white', paddingBottom: '10px', transform: 'scale(1.05)'
                              }}
                                src={e.Image}
                              />
                              <Text fontSize={{ base: 'sm', md: 'md', lg: 'xl' }} as='b' fontFamily={'lorum'} >{e.name}</Text>
                            </Box>
                          </Center>
                        </Tooltip>
                      </WrapItem >
                    ))
                  }
                </Wrap>
              </TabPanel>

              {/* Tools */}
              <TabPanel>
                <Wrap spacing='60px' justify='center'>
                  {
                    tools.map(e => (
                      <WrapItem  >
                        <Tooltip hasArrow label={e.name} placement='bottom'>
                          <Center >
                            <Box bgColor='blackAlpha.200' boxShadow={'2xl'}>
                              <Image boxSize={{ base: '60px', md: '90px', lg: '120px' }} _hover={{
                                bg: 'white', paddingBottom: '10px', transform: 'scale(1.05)'
                              }}
                                src={e.Image}
                              />
                              <Text fontSize={{ base: 'sm', md: 'md', lg: 'xl' }} as='b' fontFamily={'lorum'} >{e.name}</Text>
                            </Box>
                          </Center>
                        </Tooltip>
                      </WrapItem >
                    ))
                  }
                </Wrap>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Text>
    </Box>
  )
}

export default Skills;