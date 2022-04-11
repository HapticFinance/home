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
  import * as Logos from './HeaderBrands'
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
                Welcome to a future without impermanent loss
              </Heading>
              <Text color={mode('gray.600', 'gray.400')} mt="5" fontSize="xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua adipiscing elit.
              </Text>
              <Button
                mt="8"
                minW="14rem"
                colorScheme="blue"
                size="lg"
                height="14"
                px="8"
                fontSize="md"
                fontWeight="bold"
              >
                Get Started for free
              </Button>
            </Box>
            <Box
              boxSize={{
                base: '20',
                lg: '8',
              }}
            />
            <Img
              pos="relative"
              marginEnd="-10rem"
              w="35rem"
              src="https://raw.githubusercontent.com/HapticFinance/assets/main/haptic_logo_blue.png"
              alt="Screenshot for Form builder"
            />
          </Flex>
          <Box>
            <Text color={mode('gray.600', 'gray.400')} fontWeight="medium">
              Interconnecting the world of decentralized finance
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
                  minWidth:'12vw',
                }}
              />
              <img 
                src='https://raw.githubusercontent.com/HapticFinance/assets/main/optimism.svg'
                style={{
                  minWidth:'12vw',
                }}
              />
              <img 
                src='https://raw.githubusercontent.com/HapticFinance/assets/main/uniswap.svg'
                style={{
                  minWidth:'12vw',
                }}
              />
              <img 
                src='https://raw.githubusercontent.com/HapticFinance/assets/main/liquity.svg'
                style={{
                  minWidth:'12vw',
                }}
              />
              <img 
                src='https://raw.githubusercontent.com/HapticFinance/assets/main/lyra.svg'
                style={{
                  minWidth:'12vw',
                }}
              />
              <img 
                src='https://raw.githubusercontent.com/HapticFinance/assets/main/perpetual.svg'
                style={{
                  minWidth:'12vw',
                }}
              />
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
    )
  }

  export default Header;