import { Center, Container, Heading, Img, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import * as React from 'react'
import * as logos from './PartnerLogos'

export const Partners = () => (
  <Container
    py={{
      base: '12',
      md: '16',
    }}
  >
    <Stack
      spacing={{
        base: '4',
        md: '5',
      }}
    >
      <Heading
        fontWeight="500"
        size={{
          base: 'sm',
          md: 'md',
        }}
        fontSize="2.5em"
        paddingBottom={{
          base: '0',
          sm: '10',
        }}
      >
        Partners
      </Heading>
    </Stack>
    <Stack spacing="8">
      <SimpleGrid
        gap={{
          base: '4',
          md: '8',
        }}
        columns={{
          base: 2,
          md: 2,
          lg: 2,
          sm: 1,
        }}
        textAlign="center"
      >
        <Center>
          <Img src='https://raw.githubusercontent.com/HapticFinance/assets/main/cc.png' width='300px' />
        </Center>
        <Center>
          <Img src='https://raw.githubusercontent.com/HapticFinance/assets/main/nr.png' width='300px' />
        </Center>
      </SimpleGrid>
    </Stack>
  </Container>
)

export default Partners;