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
      <Heading size="2xl" fontWeight="extrabold">
        Access multiple lending rates
      </Heading>
      <Text
        fontSize="lg"
        fontWeight="medium"
        color={useColorModeValue('gray.600', 'whiteAlpha.700')}
      >
        Borrowers deposit ETH collateral to receive a stablecoin denominated loan from a third party protocol.
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
        title="Compound"
        value="3%"
        accentColor={useColorModeValue('#33429a')}
      >
        {/* Amet minim mollit non deserunt ullamco est sit aliqua dolor. */}
      </LendersStat>
      <LendersStat
        title="Synthetix"
        value="2.5%"
        accentColor={useColorModeValue('#33429a')}
      >
      </LendersStat>
      <LendersStat
        title="Maker"
        value="1.8%"
        accentColor={useColorModeValue('#33429a')}
      >
      </LendersStat>
    </SimpleGrid>
  </Stack>
)

export default Lenders;