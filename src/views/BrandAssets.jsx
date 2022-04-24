import {
    Center,
    Container,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import * as logos from './GridLogos'
  
  export const LogoGrid = () => (
    <Container
      py={{
        base: '12',
        md: '16',
      }}
      maxW="3xl"
    >
      <Stack spacing="8">
        <Text
          fontSize={{
            base: 'md',
            md: 'lg',
          }}
          fontWeight="medium"
          color="muted"
          textAlign="center"
        >
          Brand Guidelines
        </Text>
        <SimpleGrid
          gap={{
            base: '4',
            md: '6',
          }}
          paddingBottom={{
            base: '2.5em',
          }}
          columns={{
            base: 2,
            md: 2,
          }}
        >
            <Center
                bg="bg-surface"
                py={{
                base: '6',
                md: '6',
                }}
                boxShadow={mode('sm', 'sm-dark')}
                borderRadius="lg"
            >
                <img src='https://raw.githubusercontent.com/HapticFinance/assets/8d6f4e31159fb5094ee617917735bad120123269/haptic-logo.svg' />
            </Center>
            <Center
                bg="bg-surface"
                py={{
                base: '6',
                md: '8',
                }}
                boxShadow={mode('sm', 'sm-dark')}
                borderRadius="lg"
            >
                <img src='https://raw.githubusercontent.com/HapticFinance/assets/8d6f4e31159fb5094ee617917735bad120123269/ethereum.svg' />
            </Center>
        </SimpleGrid>
      </Stack>
      <Stack spacing="8">
        <Text
          fontSize={{
            base: 'md',
            md: 'lg',
          }}
          fontWeight="medium"
          color="muted"
          textAlign="center"
        >
          Brand Guidelines
        </Text>
        <SimpleGrid
          gap={{
            base: '4',
            md: '6',
          }}
          columns={{
            base: 2,
            md: 2,
          }}
        >
            <Center
                bg="bg-surface"
                py={{
                base: '6',
                md: '6',
                }}
                boxShadow={mode('sm', 'sm-dark')}
                borderRadius="lg"
            >
                <img src='https://raw.githubusercontent.com/HapticFinance/assets/8d6f4e31159fb5094ee617917735bad120123269/haptic-logo.svg' />
            </Center>
            <Center
                bg="bg-surface"
                py={{
                base: '6',
                md: '8',
                }}
                boxShadow={mode('sm', 'sm-dark')}
                borderRadius="lg"
            >
                <img src='https://raw.githubusercontent.com/HapticFinance/assets/8d6f4e31159fb5094ee617917735bad120123269/ethereum.svg' />
            </Center>
        </SimpleGrid>
      </Stack>
    </Container>
  )

  export default LogoGrid;