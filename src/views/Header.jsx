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
      <Box as="section" bg={mode('gray.50', 'gray.800')} pt="24" pb="12" overflow="hidden">
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
            align="flex-start"
            direction={{
              base: 'column',
              lg: 'row',
            }}
            justify="space-between"
            mb="20"
          >
            <Box
              flex="1"
              maxW={{
                lg: 'xl',
              }}
              pt="6"
            >
              <Heading as="h1" size="3xl" mt="8" fontWeight="extrabold">
                Bridging decentralized finance
              </Heading>
              <Text color={mode('gray.600', 'gray.400')} mt="5" fontSize="xl">
                Haptic is a protocol designed to increase capital efficiency and reduce the impact of impermanent loss
              </Text>
            </Box>
            <Box
              boxSize={{
                base: '20',
                lg: '8',
              }}
            />
            <Img
              pos="relative"
              w="25rem"
              src="https://raw.githubusercontent.com/HapticFinance/assets/main/haptic_logo_blue.png"
              alt="Haptic Logo"
              display={{ 
                lg:'inherit', 
                sm:'none',
              }}
            />
          </Flex>
          <Box>
            <Text color={mode('gray.600', 'gray.400')} fontWeight="medium">
              Connecting the world of decentralized finance
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
                src='https://raw.githubusercontent.com/HapticFinance/assets/main/liquity.svg'
                style={{
                  minWidth:'10vw',
                  maxWidth:'30vw',
                }}
              />
              <img 
                src='https://raw.githubusercontent.com/HapticFinance/assets/main/perpetual.svg'
                style={{
                  minWidth:'10vw',
                  maxWidth:'30vw',
                }}
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