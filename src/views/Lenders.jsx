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
        Highlights
      </Heading>
      <Text
        fontSize="lg"
        fontWeight="medium"
        color={useColorModeValue('gray.600', 'whiteAlpha.700')}
      >
        Does not matter if you are a borrower or a staker, benefit from using Haptic.
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
        title="Total value locked"
        value="50M"
        accentColor={useColorModeValue('default')}
      >
      </LendersStat>
    </SimpleGrid>
  </Stack>
)

export default Lenders;