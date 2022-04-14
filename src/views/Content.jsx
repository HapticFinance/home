import {
    Box,
    createIcon,
    Flex,
    Heading,
    Img,
    SimpleGrid,
    Text,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { ContentFeatureLink } from './ContentFeatureLink'
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
                lg: 'xl',
              }}
            >
              <Img
                htmlWidth="560px"
                htmlHeight="430px"
                w="100%"
                h="100%"
                objectFit="cover"
                src="https://raw.githubusercontent.com/HapticFinance/assets/main/covalence.png"
                display={{
                  lg:'inherit',
                  sm:'none',
                }}
              />
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
                <Box as="b" color={mode('#33429a')}>
                  Everything you need to
                </Box>
                <Heading mt="4" mb="5" size="2xl" fontWeight="extrabold" lineHeight="1.2">
                  Manage your DeFi portfolio
                </Heading>
                <Text fontSize="lg" color={mode('gray.600', 'gray.400')}>
                Haptic is built around composability principles and leverages existing protocols to achieve its functionality.
                </Text>
              </Box>
              <SimpleGrid
                columns={{
                  base: 1,
                  md: 2,
                }}
                mt="8"
              >
                {links.map((link) => (
                  <Flex key={link.label} align="center" minH="14" borderBottomWidth="1px">
                    <h1 style={{fontWeight:'600'}}>{link.label}</h1>
                  </Flex>
                ))}
              </SimpleGrid>
            </Box>
          </Flex>
        </Box>
      </Box>
    )
  }

  export default Content;