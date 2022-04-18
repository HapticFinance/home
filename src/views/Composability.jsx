import {
  Box,
  Button,
  Center,
  Grid,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'

const Feature = (props) => {
  const { title, children } = props
  return (
    <Stack>
      <Text fontWeight="bold">{title}</Text>
      <Text>{children}</Text>
    </Stack>
  )
}

export const Composability = () => {
  return (
    <Box as="section" py="24" bg={mode('gray.100', 'gray.800')}>
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
        <Grid
          templateColumns={{
            base: '1fr',
            md: '360px 1fr',
          }}
          gap="64px"
        >
          <Box>
            <Heading size="3xl" letterSpacing="tight" fontWeight="extrabold">
              Ease of access
            </Heading>
            <Text mt="6" mb="8" fontSize="lg" fontWeight="medium">
              Haptic is your interface to DeFi.
            </Text>
          </Box>
          <Box>
            <SimpleGrid
              rounded="lg"
              mt="10"
              p={{
                base: '10',
                lg: '0',
              }}
              columns={{
                base: 1,
                lg: 3,
              }}
              spacing="6"
              bg={{
                base: mode('gray.200', 'gray.700'),
                lg: 'unset',
              }}
            >
              <Feature title="Keep your principal">
                 Become a liquidity provider for selected pairs, without having to sell your ETH principal and benefit from impermanent loss protection
              </Feature>
              <Feature title="Earn ">
                Vestibulum sed arcu non odio euismod. Tristique senectus et netus et malesuada fames
                ac turpis mako.
              </Feature>
              <Feature title="Easy upgrades">
                Convallis a cras semper auctor. Curabitur vitae nunc sed velit. Arcu non odio
                euismod lacinia at quis risus.
              </Feature>
            </SimpleGrid>
          </Box>
        </Grid>
      </Box>
    </Box>
  )
}

export default Composability;