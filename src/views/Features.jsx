import { Box, Heading, SimpleGrid, Link, Stack } from '@chakra-ui/react'
import * as React from 'react'
import { FeaturesCTAButton } from './FeaturesCTAButton'
import { Feature } from './Feature'

export const Features = () => {
  return (
    <Box as="section" pb="14">
      <Box bg="linear-gradient(-45deg, #4e339a,#33429a)" color="white" pt="14" pb="8rem">
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
          <Stack
            spacing="10"
            direction={{
              base: 'column',
              lg: 'row',
            }}
            align={{
              base: 'flex-start',
              lg: 'center',
            }}
            justify="space-between"
          >
            <Heading
              size="3xl"
              lineHeight="short"
              fontWeight="extrabold"
              maxW={{
                base: 'unset',
                lg: '600px',
              }}
            >
               A hub for DeFi
            </Heading>
            {/* <Link href='https://docs.haptic.finance/' target="_blank">
              <FeaturesCTAButton
                background='#e1e1e1'
                color='#1a1a1a'
                w={{
                  base: 'full',
                  md: 'auto',
                }}
              >
                docs
              </FeaturesCTAButton>
            </Link> */}
          </Stack>
          <SimpleGrid
            columns={{
              base: 1,
              md: 2,
              lg: 4,
            }}
            spacing={{
              base: '12',
              md: '8',
              lg: '2',
            }}
            mt={{
              base: '12',
              md: '20',
            }}
          >
            <Feature title="Protocol">
              <p>- Uncensorable</p>
              <p>- Trsustless</p>
              <p>- Based on composability</p>
            </Feature>
            <Feature title="Borrowers">
              <p>- Impermanent loss protection</p>
              <p>- Ample choice of pools</p>
              <p>- NFT perks</p>
            </Feature>
            <Feature title="Stakers">
              <p>- Up to 180% staking APR</p>
              <p>- Extra treasury yields</p>
              <p>- Opt-in automatic hedging</p>
              <p>- Tokenized debt asset</p>
            </Feature>
            <Feature title="Gas & Fees">
              <p>- Native on Optimism</p>
              <p>- Cheap and fast transactions</p>
              <p>- Low protocol fees (0.3%)</p>
            </Feature>
          </SimpleGrid>
        </Box>
      </Box>
      <Box mt="-24">
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
          <SimpleGrid
            spacing="14"
            columns={{
              base: 1,
              lg: 2,
            }}
          >
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  )
}

export default Features;