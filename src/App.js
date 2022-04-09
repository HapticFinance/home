//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import '@fontsource/inter/variable.css'
  
import * as components from "./components";
import * as foundations from './foundations';


// 1. Import the utilities
import { createBreakpoints } from '@chakra-ui/theme-tools'

import { features } from './data'

import {
  Grid,
  Img,
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Drawer,
  DrawerContent,
  HStack,
  IconButton,
  Stack,
  Square,
  Icon,
  Text,
  Heading,
  Divider,
  SimpleGrid,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
  useColorModeValue as mode,
  Badge,
  Tab,
  TabIndicator,
  Tabs,
  TabList
} from '@chakra-ui/react'

import { RightArrow } from 'react-icons/hi'
import {isMobile} from 'react-device-detect'

// 1.1 Import Views
import NavBar from "./views/Navbar";
import Header from "./views/Header";
import Features from "./views/Features"
import Banner from "./views/Banner";
import Roadmap from "./views/Roadmap";
import Footer from "./views/Footer";
import Team from "./views/Team";
import Lenders from "./views/Lenders";
import Content from "./views/Content";

export const App = () => {

  // 2. Update the breakpoints as key-value pairs
  const breakpoints = createBreakpoints({
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  })
   
  const myTheme = extendTheme({
      ...foundations,
      components: { ...components,
      Button: {
        // 1. We can update the base styles
        baseStyle: {
          fontWeight: 'bold', // Normally, it is "semibold"
        },
        // 2. We can add a new button size or extend existing
        sizes: {
          xl: {
            h: '56px',
            fontSize: 'lg',
            px: '32px',
          },
        },
        // 3. We can add a new visual variant
        variants: {
          'with-shadow': {
            bg: 'red.400',
            boxShadow: '0 0 2px 2px #efdfde',
          },
          // 4. We can override existing variants
          solid: (props) => ({
            bg: props.colorMode === 'dark' ? 'blue.300' : 'blue.500',
          }),
        },
      },
     },
    breakpoints,
    styles: {
      global: {
        // styles for the `body`
        body: {
          bg: 'gray.400',
          color: 'white',
        },
        // styles for the `a`
        a: {
          color: 'teal.500',
          _hover: {
            textDecoration: 'underline',
          },
        },
      },
    },
  })
  return (
    <ChakraProvider theme={myTheme}>
      <NavBar />
      <Header />
      <Content />
      <Lenders />
      <Banner />
      <Features />
      <Team />
      {/* <Roadmap /> */}
      <Footer />
    </ChakraProvider>
  )
}


export default App;
