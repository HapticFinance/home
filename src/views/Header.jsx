import {
    Box,
    Button,
    Flex,
    Heading,
    Img,
    SimpleGrid,
    Text,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
  import * as React from 'react'

  export function Header() {
    return (
      <Box 
        as="section" 
        pt="24" 
        pb="12" 
        overflow="hidden"
      >
        <Box
          bgImage="https://raw.githubusercontent.com/HapticFinance/assets/main/background.png"
          bgPosition="left center"
          bgRepeat="no-repeat"
          bgSize="65%"
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
            align="flex-start"
            direction={{
              base: 'column',
              lg: 'row',
            }}
            justify="space-between"
            mb="20"
          >
            <Img
              pos="relative"
              w="25rem"
              display={{ 
                lg:'inherit', 
                sm:'none',
              }}
            />
            <Box
              flex="1"
              pt="6"
            >
              <Heading as="h1" size="3xl" mt="8" fontWeight="extrabold" textAlign="right">
                Bridging decentralized finance
              </Heading>
              <Text color={mode('gray.600', 'gray.400')} mt="5" fontSize="xl" textAlign="right" maxW={{ lg: 'xl'}} marginLeft={"25%"}>
                Haptic is designed to increase capital efficiency and reduce impermanent loss across automated market makers.
              </Text>
            </Box>
            <Box
              boxSize={{
                base: '20',
                lg: '8',
              }}
            />
          </Flex>
          <Box>
            <Text color={mode('gray.600', 'gray.400')} fontWeight="medium">
              Interacts with:
            </Text>
            <SimpleGrid
              mt="8"
              columns={{
                base: 2,
                md: 3,
                lg: 6,
              }}
              color="gray.500"
              alignItems="center"
              spacing={{
                base: '12',
                lg: '24',
              }}
              fontSize="2xl"
            >
              <img 
                src='https://raw.githubusercontent.com/HapticFinance/assets/main/ethereum.svg'
                style={{
                  minWidth:'10vw',
                  maxWidth:'30vw',
                }}
              />
              <img 
                src='https://raw.githubusercontent.com/HapticFinance/assets/main/optimism.svg'
                style={{
                  minWidth:'10vw',
                  maxWidth:'30vw',
                }}
              />
              <img 
                src='https://raw.githubusercontent.com/HapticFinance/assets/main/synthetix.svg'
                style={{
                  minWidth:'10vw',
                  maxWidth:'30vw',
                }}
              />
              <img 
                src='https://raw.githubusercontent.com/HapticFinance/assets/main/lyra.svg'
                style={{
                  minWidth:'10vw',
                  maxWidth:'30vw',
                }}
              />
              <img 
                src='https://raw.githubusercontent.com/HapticFinance/assets/main/perpetual.svg'
                maxW={{
                  base: '8vw',
                  lg: '20vw',
                  sm: '4vw',
                }}
                // style={{
                //   minWidth:'10vw',
                //   maxWidth:'30vw',
                // }}
              />
              <img 
                src='https://raw.githubusercontent.com/HapticFinance/assets/main/uniswap.svg'
                style={{
                  minWidth:'10vw',
                  maxWidth:'30vw',
                }}
              />
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
    )
  }

  export default Header;