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


import { HiArrowRight } from 'react-icons/hi'

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'
import { Logo } from './Logo'

import {isMobile} from 'react-device-detect'

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
          bg:"green.500"
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
            bg: props.colorMode === 'dark' ? 'green.300' : 'green.500',
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
    {/* Nav */}
    <Box as="section" pb={{ base: '12', md: '24' }}>
      <Box as="nav" bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')}>
        <Container py={{ base: '4', lg: '5' }}>
          <HStack spacing="10" justify="space-between">
            <Logo />
            {!isMobile ? (
              <Flex justify="space-between" flex="1">
                <ButtonGroup variant="link" spacing="8">
                  {['Product', 'Pricing', 'Resources', 'Support'].map((item) => (
                    <Button key={item}>{item}</Button>
                  ))}
                </ButtonGroup>
                <HStack spacing="3">
                  <Button variant="ghost">Sign in</Button>
                  <Button variant="primary">Sign up</Button>
                </HStack>
              </Flex>
            ) : (
              <IconButton
                variant="ghost"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
          </HStack>
        </Container>
      </Box>
    </Box>

    <Box as="section" pb={{ base: '12', md: '24' }}>
      <Box as="nav" bg="bg-surface" py={{ base: '4', lg: '5' }}>
        <Container>
          <HStack spacing="10" justify="space-between">
            <Logo />
            {!isMobile ? (
              <HStack spacing="10">
                <ButtonGroup variant="link" spacing="8">
                  {['Product', 'Pricing', 'Resources', 'Support'].map((item) => (
                    <Button key={item}>{item}</Button>
                  ))}
                </ButtonGroup>
                <Box>
                  <Button variant="primary" py="10" px="6" my="-5" borderRadius="0">
                    Get Started
                  </Button>
                </Box>
                <Button 
                  //colorScheme={"gray"}
                  //onClick={onClick}
                  width={{ base: "100%", md: "auto", sm: "85%" }}
                  marginLeft={{ base: "100%", md: "auto", sm: "30%" }}
                  marginBottom={{ base: "auto", md: "auto", sm: "20px" }}
                  size={'md'}
                  fontFamily="monospace"
                >
                  Connect Wallet
                </Button>
              </HStack>
            ) : (
              <IconButton
                variant="ghost"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
          </HStack>
        </Container>
      </Box>
      <Divider />
    </Box>

      {/* Hero */}
      <Box
      as="section"
      bg={mode('gray.50', 'gray.800')}
      pb="24"
      pos="relative"
      px={{ base: '6', lg: '12' }}
    >
      <Box maxW="7xl" mx="auto">
        <Box
          maxW={{ lg: 'md', xl: 'xl' }}
          pt={{ base: '20', lg: '40' }}
          pb={{ base: '16', lg: '24' }}
        >
          <HStack
            className="group"
            as="a"
            href="#"
            px="2"
            py="1"
            bg={mode('gray.200', 'gray.700')}
            rounded="full"
            fontSize="sm"
            mb="8"
            display="inline-flex"
            minW="18rem"
          >
            <Badge
              px="2"
              variant="solid"
              colorScheme="green"
              rounded="full"
              textTransform="capitalize"
            >
              New
            </Badge>
            <Box fontWeight="medium">Introducing the new Chakra API</Box>
            <Box
              aria-hidden
              transition="0.2s all"
              _groupHover={{ transform: 'translateX(2px)' }}
              as={HiArrowRight}
              display="inline-block"
            />
          </HStack>
          <Heading as="h1" size="3xl" lineHeight="1" fontWeight="extrabold" letterSpacing="tight">
            Connect and engage with{' '}
            <Box as="mark" color={mode('blue.500', 'blue.300')} bg="transparent">
              your customers globally
            </Box>
          </Heading>
          <Text mt={4} fontSize="xl" fontWeight="medium" color={mode('gray.600', 'gray.400')}>
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
            commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
          </Text>
          <Stack direction={{ base: 'column', sm: 'row' }} spacing="4" mt="8">
            <Button size="lg" colorScheme="blue" height="14" px="8" fontSize="md">
              Get Started Now
            </Button>
            <Button
              size="lg"
              bg="white"
              color="gray.800"
              _hover={{ bg: 'gray.50' }}
              height="14"
              px="8"
              shadow="base"
              fontSize="md"
            >
              Talk to an expert
            </Button>
          </Stack>
        </Box>
      </Box>
      <Box
        pos={{ lg: 'absolute' }}
        insetY={{ lg: '0' }}
        insetEnd={{ lg: '0' }}
        bg="gray.50"
        w={{ base: 'full', lg: '50%' }}
        height={{ base: '96', lg: 'full' }}
        sx={{
          clipPath: { lg: 'polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)' },
        }}
      >
        <Img
          height="100%"
          width="100%"
          objectFit="cover"
          src="https://images.unsplash.com/photo-1551836022-b06985bceb24?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
          alt="Lady working"
        />
      </Box>
    </Box>
      {/* Footer */}
      <Container as="footer" role="contentinfo" py={{ base: '12', md: '16' }}>
        <Stack spacing={{ base: '4', md: '5' }}>
          <Stack justify="space-between" direction="row" align="center">
            <Logo />
            <ButtonGroup variant="ghost">
              <IconButton
                as="a"
                href="#"
                aria-label="LinkedIn"
                icon={<FaLinkedin fontSize="1.25rem" />}
              />
              <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
              <IconButton
                as="a"
                href="#"
                aria-label="Twitter"
                icon={<FaTwitter fontSize="1.25rem" />}
              />
            </ButtonGroup>
          </Stack>
          <Text fontSize="sm" color="subtle">
            &copy; {new Date().getFullYear()} Chakra UI Pro, Inc. All rights reserved.
          </Text>
        </Stack>
  </Container>

  </ChakraProvider>
  )
}


export default App;
