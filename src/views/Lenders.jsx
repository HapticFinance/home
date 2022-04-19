import { Heading, SimpleGrid, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { LendersStat } from './LendersStat'

export const Lenders = () => (
  <Stack
    as="section"
    maxW="7xl"
    mx="auto"
    px={{
      base: '6',
      md: '8',
    }}
    py={{
      base: '12',
      md: '20',
    }}
    spacing="12"
  >
    <Stack maxW="xl" spacing="6">
      <Heading size="xl" fontWeight="extrabold">
        How does it work?
      </Heading>
      <Text
        fontSize="lg"
        fontWeight="small"
        color={useColorModeValue('gray.600', 'whiteAlpha.700')}
      >
          Stakers deposit Haptic network token (HAP) as a collateral, enabling the issuance of US dollar denominated debt. Such pooled collateral model enables deep liquidity and eliminates the need for counterparts. Borrowers deposit ETH to obtain a stablecoin denominated loan from a third party procotol and use the funds to provide liquidity on Uniswap. Haptic protocol tracks impermanent loss and provides compensation to honest borrowers along with the exchange fees generated by their liquidity. Stakers are rewarded for their role with staking rewards and treasury yields.
      </Text>
    </Stack>
    <SimpleGrid
      mx="auto"
      spacing={{
        base: '10',
        md: '20',
      }}
      columns={{
        base: 1,
        md: 3,
      }}
    >
      <LendersStat
        title="Impermanent loss protection"
        value="100%"
        accentColor={useColorModeValue('default')}
      >
        {/* Amet minim mollit non deserunt ullamco est sit aliqua dolor. */}
      </LendersStat>
      <LendersStat
        title="Staking APR"
        value="180%"
        accentColor={useColorModeValue('default')}
      >
      </LendersStat>
      <LendersStat
        title="Protocol fees"
        value="0.3%"
        accentColor={useColorModeValue('default')}
      >
      </LendersStat>
    </SimpleGrid>
  </Stack>
)

export default Lenders;