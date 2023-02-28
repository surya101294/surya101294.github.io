import React from 'react'
import { Image, Wrap, Heading, Box, Center, Text } from '@chakra-ui/react'

const Skill = () => {

  return (
    <Box style={{ width: '95%', margin: 'auto' }} id='skillpage' boxShadow={'2xl'} >
      <Heading fontSize={{ base: 'md', md: '5xl', lg: '7xl' }} _hover={{ transform: 'scale(1.05)', }} fontFamily={'lorum'}>SKILLS</Heading>
      <hr />
      <br /> <br />
      <Heading fontSize={{ base: 'sm', md: 'md', lg: '3xl' }} fontFamily={'lorum'}> Frontend Tech Stack</Heading><br />
      <Center margin='auto' width={'80%'}>
        <Wrap spacing={{ base: '2', md: '8', lg: '10' }}>
          <Box bgColor='blackAlpha.200' boxShadow={'2xl'}>
            <Image boxSize={{ base: '60px', md: '110px', lg: '150px' }} _hover={{ bg: 'white', paddingBottom: '10px', transform: 'scale(1.05)' }} alt='JS' src={'https://academyclass.com/wp-content/uploads/2021/10/Javascript.png'}/>
            <Text fontSize={{ base: 'sm', md: 'md', lg: 'xl' }} as='b' fontFamily={'lorum'} >Javascript</Text>
          </Box>
          <Box bgColor='blackAlpha.200' boxShadow={'2xl'}>
            <Image boxSize={{ base: '60px', md: '110px', lg: '150px' }} _hover={{ bg: 'white', paddingBottom: '10px', transform: 'scale(1.05)' }} alt='React' src={'https://chiranjeev-thapliyal.vercel.app/svg/reactjs.svg'}
            />
            <Text fontSize={{ base: 'sm', md: 'md', lg: 'xl' }} as='b' fontFamily={'lorum'} >React</Text>
          </Box>

          <Box bgColor='blackAlpha.200' boxShadow={'2xl'}>
            <Image boxSize={{ base: '60px', md: '110px', lg: '150px' }} _hover={{ bg: 'white', paddingBottom: '10px', transform: 'scale(1.05)' }} alt='Redux' src={'https://chiranjeev-thapliyal.vercel.app/svg/redux.svg'}/>
            
            <Text fontSize={{ base: 'sm', md: 'md', lg: 'xl' }} as='b' fontFamily={'lorum'} >Redux</Text>
          </Box>
          <Box bgColor='blackAlpha.200' boxShadow={'2xl'}>
            <Image boxSize={{ base: '60px', md: '110px', lg: '150px' }} _hover={{ bg: 'white', paddingBottom: '10px', transform: 'scale(1.05)' }} alt='Typescript' src={'https://ik.imagekit.io/laracasts/series/thumbnails/typescript-for-beginners.png?tr=w-432'} />
            <Text fontSize={{ base: 'sm', md: 'md', lg: 'xl' }} as='b' fontFamily={'lorum'} >Typescript</Text>
          </Box>
          <Box bgColor='blackAlpha.200' boxShadow={'2xl'}>
            <Image boxSize={{ base: '60px', md: '110px', lg: '150px' }} _hover={{ bg: 'white', paddingBottom: '10px', transform: 'scale(1.05)' }} alt='css' src={'https://sujjwal21.github.io/static/media/css.69a82c2d9e45c933a9cb.png'}/>
            <Text fontSize={{ base: 'sm', md: 'md', lg: 'xl' }} as='b' fontFamily={'lorum'} >CSS</Text>
          </Box>
          <Box bgColor='blackAlpha.200' boxShadow={'2xl'}>
            <Image boxSize={{ base: '60px', md: '110px', lg: '150px' }} _hover={{ bg: 'white', paddingBottom: '10px', transform: 'scale(1.05)' }} alt='html' src={'https://sujjwal21.github.io/static/media/html.2ba4fabc69a89a8f71e6.png'}
            />
            <Text fontSize={{ base: 'sm', md: 'md', lg: 'xl' }} as='b' fontFamily={'lorum'} >HTML</Text>
          </Box>
          <Box bgColor='blackAlpha.200' boxShadow={'2xl'}>
            <Image boxSize={{ base: '60px', md: '110px', lg: '150px' }} _hover={{ bg: 'white', paddingBottom: '10px', transform: 'scale(1.05)' }} alt='chakara' src={'https://manojattri.vercel.app/static/media/chakra.e4cb472ccaabf22affba.png'} />
            <Text fontSize={{ base: 'sm', md: 'md', lg: 'xl' }} as='b' fontFamily={'lorum'} >Chakra</Text>
          </Box>
          <Box bgColor='blackAlpha.200' boxShadow={'2xl'}>
            <Image boxSize={{ base: '60px', md: '110px', lg: '150px' }} _hover={{ bg: 'white', paddingBottom: '10px', transform: 'scale(1.05)' }} borderRadius='full' alt='Material UI' src={'https://mui.com/static/logo.png'} />
            <Text fontSize={{ base: 'sm', md: 'md', lg: 'xl' }} as='b' fontFamily={'lorum'} >Material UI</Text>
          </Box>
          <Box bgColor='blackAlpha.200' boxShadow={'2xl'}>
            <Image boxSize={{ base: '60px', md: '110px', lg: '150px' }} _hover={{ bg: 'white', paddingBottom: '10px', transform: 'scale(1.05)' }} alt='Bootstrap' src={'https://icons.getbootstrap.com/assets/img/icons-hero.png'} />
            <Text fontSize={{ base: 'sm', md: 'md', lg: 'xl' }} as='b' fontFamily={'lorum'} >Bootstrap</Text>
          </Box>

        </Wrap>
      </Center>
      <br />
      <hr /><br />

      <Heading fontSize={{ base: 'sm', md: 'md', lg: '3xl' }} fontFamily={'lorum'}> Backend Tech Stack</Heading><br />

      <Center margin='auto' width={'80%'}>
        <Wrap spacing={{ base: '2', md: '10', lg: '10' }}>

          <Box bgColor='blackAlpha.200' boxShadow={'2xl'}>
            <Image boxSize={{ base: '60px', md: '110px', lg: '150px' }}  _hover={{ bg: 'white', paddingBottom: '10px', transform: 'scale(1.05)' }} alt='Nodejs' src={'https://chiranjeev-thapliyal.vercel.app/svg/nodejs.svg'}
            />
            <Text fontSize={{ base: 'sm', md: 'md', lg: 'xl' }} as='b' fontFamily={'lorum'} >NodeJS</Text>
          </Box>

          <Box bgColor='blackAlpha.200' boxShadow={'2xl'}>
            <Image boxSize={{ base: '60px', md: '110px', lg: '150px' }}  _hover={{ bg: 'white', paddingBottom: '10px', transform: 'scale(1.05)' }} alt='express' src={'https://www.orafox.com/wp-content/uploads/2019/01/expressjs.png'} />
            <Text fontSize={{ base: 'sm', md: 'md', lg: 'xl' }} as='b' fontFamily={'lorum'} >Express </Text>
          </Box>
          <Box bgColor='blackAlpha.200' boxShadow={'2xl'}>
            <Image bgColor={'transparent'} boxSize={{ base: '60px', md: '110px', lg: '150px' }}  _hover={{ bg: 'white', paddingBottom: '10px', transform: 'scale(1.05)' }} alt='mongodb' src={'https://cdn.iconscout.com/icon/free/png-256/mongodb-3629020-3030245.png?f=webp&w=128'} />
            <Text fontSize={{ base: 'sm', md: 'md', lg: 'xl' }} as='b' fontFamily={'lorum'} >MongoDB</Text>
          </Box>

        </Wrap>
      </Center>
      <br />
      <hr /><br />
      <Heading fontSize={{ base: 'sm', md: 'md', lg: '3xl' }} fontFamily={'lorum'}>Tools</Heading><br />
      <Center margin='auto' width={'80%'}>
        <Wrap spacing={{ base: '2', md: '10', lg: '10' }}>
          <Box bgColor='blackAlpha.200' boxShadow={'2xl'}>
            <Image boxSize={{ base: '60px', md: '110px', lg: '150px' }}  _hover={{ bg: 'white', paddingBottom: '10px', transform: 'scale(1.05)' }} alt='github' src={'https://sujjwal21.github.io/static/media/github.3b9e32903aa89111875d.png'} />
            <Text fontSize={{ base: 'sm', md: 'md', lg: 'xl' }} as='b' fontFamily={'lorum'} >Github</Text>
          </Box>
          <Box bgColor='blackAlpha.200' boxShadow={'2xl'}>
            <Image boxSize={{ base: '60px', md: '110px', lg: '150px' }}  _hover={{ bg: 'white', paddingBottom: '10px', transform: 'scale(1.05)' }} alt='npm' src={'https://cdn.iconscout.com/icon/free/png-256/npm-3521612-2945056.png'} />
            <Text fontSize={{ base: 'sm', md: 'md', lg: 'xl' }} as='b' fontFamily={'lorum'} >Npm</Text>
          </Box>
          <Box bgColor='blackAlpha.200' boxShadow={'2xl'}>
            <Image boxSize={{ base: '60px', md: '110px', lg: '150px' }}  _hover={{ bg: 'white', paddingBottom: '10px', transform: 'scale(1.05)' }} alt='Vercel' src={'https://th.bing.com/th/id/R.55bc7de5fbee3567ea51a2b146057ccb?rik=FS1Xk2gxsTyIuw&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_260234.png&ehk=RMqSsG5mX%2fU8dVGTgz7ObsPkayg3cpHbXlBOJEPwBFM%3d&risl=&pid=ImgRaw&r=0'} />
            <Text fontSize={{ base: 'sm', md: 'md', lg: 'xl' }} as='b' fontFamily={'lorum'} >Vercel</Text>
          </Box>
          <Box bgColor='blackAlpha.200' boxShadow={'2xl'}>
            <Image boxSize={{ base: '60px', md: '110px', lg: '150px' }}  _hover={{ bg: 'white', paddingBottom: '10px', transform: 'scale(1.05)' }} alt='Netlify' src={'https://aboutjorismichel.com/assets/icons/netlifyIcon.png'} />
            <Text fontSize={{ base: 'sm', md: 'md', lg: 'xl' }} as='b' fontFamily={'lorum'} >Netlify</Text>
          </Box>
          <Box bgColor='blackAlpha.200' boxShadow={'2xl'}>
            <Image boxSize={{ base: '60px', md: '110px', lg: '150px' }}  _hover={{ bg: 'white', paddingBottom: '10px', transform: 'scale(1.05)' }} alt='Canva' src={'https://static-blog.crozdesk.com/wp-content/uploads/2015/09/23114952/canva-logo.png'} />
            <Text fontSize={{ base: 'sm', md: 'md', lg: 'xl' }} as='b' fontFamily={'lorum'} >Canva</Text>
          </Box>
          <Box bgColor='blackAlpha.200' boxShadow={'2xl'}>
            <Image boxSize={{ base: '60px', md: '110px', lg: '150px' }}  _hover={{ bg: 'white', paddingBottom: '10px', transform: 'scale(1.05)' }} alt='cyclic' src={'https://www.cyclic.sh/images/cyclic-logo.png'} />
            <Text fontSize={{ base: 'sm', md: 'md', lg: 'xl' }} as='b' fontFamily={'lorum'} >Cyclic</Text>
          </Box>
          <Box bgColor='blackAlpha.200' boxShadow={'2xl'}>
            <Image boxSize={{ base: '60px', md: '110px', lg: '150px' }}  _hover={{ bg: 'white', paddingBottom: '10px', transform: 'scale(1.05)' }} alt='cypress' src={'https://www.cypress.io/images/layouts/navbar-brand.svg'} />
            <Text fontSize={{ base: 'sm', md: 'md', lg: 'xl' }} as='b' fontFamily={'lorum'} >Cypress</Text>
          </Box>
          {/* <Box bgColor='blackAlpha.200' boxShadow={'2xl'}>
            <Image boxSize={{ base: '60px', md: '110px', lg: '150px' }}  _hover={{ bg: 'white', paddingBottom: '10px', transform: 'scale(1.05)' }} alt='jest' src={''} />
            <Text fontSize={{ base: 'sm', md: 'md', lg: 'xl' }} as='b' fontFamily={'lorum'} >Jest</Text>
          </Box> */}
          <Box bgColor='blackAlpha.200' boxShadow={'2xl'}>
            <Image boxSize={{ base: '60px', md: '110px', lg: '150px' }}  _hover={{ bg: 'white', paddingBottom: '10px', transform: 'scale(1.05)' }} alt='Vscode' src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAH+CAMAAADd1kY8AAACkVBMVEUAAAAfnPAAVZsAAQEAP3sASKYAZakAVJQAeswAecoAdMQAYqsAeswAeswAW5wAZakAdcsAeswAabIBeMoAZakAZakBd8oAX6IAZakAZakAeswEe8wBd8oAbr4AeswAeswAd8gAdsgAdsccmOwAZakAZakAeswAeswAZakAY6gAY6gAYqYAYqQAeswAZakAZakAeswAZakAecwAeswAZKcBessAecoBeckAYaUAYqQal+sAeswAZakAeswAZKkAecsAY6gZk+YAeswAZakAZKkAeswAZakAZKkAeswAecsAZKgAecsCeswAZaoCe8wdmu4blukAecwAeswAecwAeswAeswAeswAZakAZKgPiNkAY6galOYAZakAeswAZakAeswAZKkAZakAZKgAeswAZKgAessAecwAY6YCeMoAeswUkeQAZakAZakAZKkAecsAZKkAZKgAY6gAessAecsNidoAYacBe8wAZakWkuYWjNsAZKkAZKkAZakAZKkAZakAZakAecwShtQAZakAZKgRit0AY6gAZKcAeMsIhNYAYKMaluoYlOkWj+AUidgRjeAAZKkAecsRj+ERitsAZKgAecsPhNIOidsNiNkJg9Ydmu4Yj+AAeswXk+cAZKgAZakTj+MTkOQSh9YSh9UAes0AecsSjN4RhtQXj98Vi9oUidgUkOQTiNYSkOQQidkQjeAMjN0AYacYkOEAZakSj+IAecwAZacfnO8dmu0bl+kQhdQSjuIIg9UIdLwXjdwfnPAAeswAZakAZqoAe80AeMoAZ60AdcUAcLwem+8AarIBbLUAabAAecsAd8gBbrgAc8ICcr4AZaoAZqwUkeQEf9IIhNgOi98TiNgOgM0BfM4Wjt4LecQQESevAAAAvnRSTlMA6wUBAgP9CPcSDAr99A34CPsQNfPwLhPs5/AaFgfRxyIdDv76/unZtTkzIxzt497dyMGyREE7KSAW98y+vIFcPu7l16uomJOPbGliVFJP/v2top6ZlIp2YD4w9vXj29XPu4qFhX5nKSW3tbCdeXFtVk1LSC0r/dLHx8XCqKOgjoB6clxQS0hEJBjx5dKqfX15a2RkV0k3MB/55uDa1cysnZqNd3V0bd65r6Wjk1hGJyfq1Il7WejVtl5d5OSd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'} />
            <Text fontSize={{ base: 'sm', md: 'md', lg: 'xl' }} as='b' fontFamily={'lorum'} >Vs code</Text>
          </Box>
          <Box bgColor='blackAlpha.200' boxShadow={'2xl'}>
            <Image boxSize={{ base: '60px', md: '110px', lg: '150px' }}  _hover={{ bg: 'white', paddingBottom: '10px', transform: 'scale(1.05)' }} alt='postman' src={'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png'} />
            <Text fontSize={{ base: 'sm', md: 'md', lg: 'xl' }} as='b' fontFamily={'lorum'} >Postman</Text>
          </Box>
        </Wrap>
      </Center>
      <br /> <br />
    </Box>
  )
}

export default Skill
