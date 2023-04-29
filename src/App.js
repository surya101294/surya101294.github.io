import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Project from './Components/Project';
import Skill from './Components/Skill';
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
// import gif2 from "./assets/gif2.gif";
import loader from './logo/loader.gif'
import { useEffect, useState } from "react";
import { Box, Image } from "@chakra-ui/react";
import Skills from './Components/Skills';
import TopToBottom from './Components/TopToBottom';

function App() {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <Box height="100vh" backgroundColor={{ base: "black", md: "none" }} paddingTop={{ base: "60%", sm: "30%", md: "5px" }} >
                <Image src={loader} w="25%" h='35%' m='auto' />
            </Box>
        )
    }

    return (
        <div className="App">
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "#93BFCF",
                            // value: "#EEEEEE",
                            opacity: 1
                        },
                    },
                    fullScreen: {
                        enable: true,
                        zIndex: -2,
                    },
                    backgroundMask: {
                        composite: "destination-out",
                        cover: {
                            color: {
                                value: "#fff"
                            },
                            opacity: 1,
                        },
                        enable: false
                    },
                    // fpsLimit: 300,
                    interactivity: {
                        events: {
                            // onClick: {
                            //     enable: true,
                            //     mode: "push",
                            // },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 5,
                            },
                            repulse: {
                                distance: 100,
                                duration: 1,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.8,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            directions: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 30,
                        },
                        opacity: {
                            value: 0.4,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 6 },
                        },
                    },
                    detectRetina: true,
                }} />
            <Navbar />
            <Home />
            {/* <SocialLinks/> */}
            <About />
            {/* <CustomizedTimeline/> */}
            <Project />
            <Skills />
            {/* <Skill /> */}
            <Contact />
            <Footer />
            <TopToBottom />
        </div>
    );
}
export default App;
