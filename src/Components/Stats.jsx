import React from "react";
// import Styles from "../Styles/styles.css";
import "../App.css";
import { Center, Flex, Image } from "@chakra-ui/react";
const Stats = () => {
  return (
    <div>
      <Center>
        <a href="https://github.com/surya101294">
          <Image
           align="left"
           _hover={{ bg: '#15f4ee', transform: 'scale(1.01)', border:'1px solid gray' }}
            src="https://github-readme-streak-stats.herokuapp.com/?user=surya101294"
            alt="surya stats"
          />
        </a>
      </Center>

      <Flex direction={{ base: 'column', md: 'row' }} justifyContent='center' margin='auto' width={'90%'} gap={5} >
        <a href="https://github.com/surya101294">
          <Image
            // align="center"
           _hover={{ bg: '#15f4ee', transform: 'scale(1.01)', border:'1px solid gray' }}
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=surya101294" alt="surya stats"
          //launguages
          />
        </a>

        <a href="https://github.com/surya101294">
          <Image
            // align="left"
           _hover={{ bg: '#15f4ee', transform: 'scale(1.01)', border:'1px solid gray' }}
            src="https://github-readme-stats.vercel.app/api?username=surya101294&count_private=true&show_icons=true" alt="surya stats" //stats
          />
        </a>
      </Flex>
    </div>
  );
};

export default Stats;