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
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
        consequat duis enim.
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
        accentColor={useColorModeValue('green.500', 'green.300')}
      >
        Amet minim mollit non deserunt ullamco est sit aliqua dolor.
      </LendersStat>
      <LendersStat
        title="Synthetix"
        value="2.5%"
        accentColor={useColorModeValue('blue.500', 'blue.300')}
      >
        Amet minim mollit non deserunt ullamco est sit aliqua dolor.
      </LendersStat>
      <LendersStat
        title="Aave"
        value="1.8%"
        accentColor={useColorModeValue('pink.500', 'pink.300')}
      >
        Amet minim mollit non deserunt ullamco est sit aliqua dolor.
      </LendersStat>
    </SimpleGrid>
  </Stack>
)

export default Lenders;