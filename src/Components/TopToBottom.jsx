import { Box, useColorMode } from '@chakra-ui/react';
import React, { useState } from 'react'
import { BiUpArrow } from "react-icons/bi";

const TopToBottom = () => {
    const { colorMode } = useColorMode();
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <Box
            zIndex={'10'}
            top='90vh'
            position='fixed'
            left={{
                base: '90%',
                sm: "90%",
                md: "90%",
                lg: "95%",
                xl: "95%",
            }}
            color={colorMode === 'light' ? '#454360' : '#cdcdff'}
            onClick={scrollToTop}
            cursor='pointer'
            display={visible ? 'inline' : 'none'}
        >
            <BiUpArrow size={'40px'} />
        </Box>
    )
}

export default TopToBottom;