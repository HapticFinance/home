import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import '@fontsource/inter/variable.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import * as components from "./components";
import * as foundations from './foundations';


// 1. Import the utilities
import { createBreakpoints } from '@chakra-ui/theme-tools'

//Import pages
import Home from './views/Home';

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
          // bg: 'gray.400',
          color: '#33429a',
        },
        // styles for the `a`
        a: {
          color: '#33429a',
          _hover: {
            textDecoration: 'underline',
          },
        },
        // styles for the `dl`
        dl: {
          color: '#33429a',
        }
      },
    },
  })
  return (


    <ChakraProvider theme={myTheme}>

        <Router>
          <Routes>

            <Route path='/' element={<Home/>} />

         
          </Routes>
        </Router>

    </ChakraProvider>
  )
}


export default App;
