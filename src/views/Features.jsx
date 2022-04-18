import { Box, Heading, SimpleGrid, Stack } from '@chakra-ui/react'
import * as React from 'react'
import { FeaturesCTAButton } from './FeaturesCTAButton'
import { Feature } from './Feature'

export const Features = () => {
  return (
    <Box as="section" pb="24">
      <Box bg="linear-gradient(-45deg, #4e339a,#33429a)" color="white" pt="24" pb="12rem">
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
              Impermanent loss protection
            </Heading>
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
            <Feature title="Borrowers">
              When a borrower decides to exit the system, and their account is in healthy state, they are entitled to receive compensation for any impermanent loss experienced, denominated in HAP token. The amounts are escrowed by the protocol and can be vested over a period of time.
            </Feature>
            <Feature title="Stakers">
              Stakers play a central role in the protocol as they provide the pool of liquidity which absorbs the effects of I/L generated by borrowers. As such, they are entitled to staking rewards as well as to a portion of the token swap fees generated by the borrowers‘ liquidity positions.
            </Feature>
            <Feature title="LP Bonds">
              The LP bond mechanism serves an important function as it provides a way for stakers to pay their debt at a discounted rate and the same time, enables the protocol to control and own its own liquidity. 
            </Feature>
            <Feature title="Rewards and Fees">
              The liquidity positions which borrowers engage with generate a substantial amount of revenues in terms of token swap fees and they are shared across users of the protocols.
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