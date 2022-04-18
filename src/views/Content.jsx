import {
    Box,
    Center,
    createIcon,
    Flex,
    Heading,
    Img,
    SimpleGrid,
    Text,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { links } from './_contentData'
  
  export const RightArrow = createIcon({
    viewBox: '0 0 11 12',
    d: 'M0 0L4.8 6L0 12H5.78182L10.5818 6L5.78182 0H0Z',
  })
  export const Content = () => {
    return (
      <Box as="section" py="24">
        <Box
          maxW={{
            base: 'xl',
            md: '7xl',
          }}
          mx="auto"
          px={{
            base: '6',
            md: '8',
          }}
        >
          <Flex
            direction={{
              base: 'column',
              lg: 'row',
            }}
            justify="space-between"
          >
            <Box
              flex="1"
              maxW={{
                lg: 'md',
              }}
            >
              <Center>
                <Img
                  htmlWidth="576px"
                  htmlHeight="576px"
                  w="100%"
                  h="100%"
                  src="https://raw.githubusercontent.com/HapticFinance/assets/main/haptic_atom.png"
                  display={{
                    lg:'inherit',
                    sm:'none',
                  }}
                />
              </Center>
            </Box>
            <Box
              ms={{
                lg: '12',
              }}
              mt={{
                base: '12',
                lg: 0,
              }}
              flex="1"
              maxW={{
                lg: 'xl',
              }}
            >
              <Box
                maxW={{
                  base: 'xl',
                  lg: 'unset',
                }}
              >
                <Box as="b" color={mode('default')}>
                  Built around DeFi composability
                </Box>
                <Heading mt="4" mb="5" size="2xl" fontWeight="extrabold" lineHeight="1.2">
                  Borrower or Staker?
                </Heading>
                <Text fontSize="lg" color={mode('gray.600', 'gray.400')}>
                  
                </Text>
              </Box>
              <SimpleGrid
                columns={{
                  base: 2,
                  md: 2,
                }}
                mt="8"
                style={{maxWidth:"100%"}}
              >
                {links.map((link) => {
                  let style = {fontWeight:'1200'}
                  if (link.label == "Borrower" || link.label == "Staker") {
                    style = {fontWeight:'600'}
                  } 
                  return (
                    <Flex key={link.label} align="center" minH="14" borderBottomWidth="1px" style={{marginRight: "20%"}}>
                      <h1 style={style}>{link.label}</h1>
                    </Flex>
                  )
                })

              }
              </SimpleGrid>
            </Box>
          </Flex>
        </Box>
      </Box>
    )
  }

  export default Content;