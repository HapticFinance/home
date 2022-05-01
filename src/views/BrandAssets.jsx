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
                <img 
                  src='https://raw.githubusercontent.com/HapticFinance/assets/main/haptic_logo_blue.png' 
                  style={{
                    maxWidth: '150px',
                  }} 
                />
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
                <img src='https://raw.githubusercontent.com/HapticFinance/assets/8d6f4e31159fb5094ee617917735bad120123269/haptic-logo.svg' />
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
        >
          Dark Version
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
                bg="#3c3c3c"
                py={{
                base: '6',
                md: '6',
                }}
                boxShadow={mode('sm', 'sm-dark')}
                borderRadius="lg"
            >
                <img 
                  src='https://raw.githubusercontent.com/HapticFinance/assets/main/haptic_logo_white.png' 
                  style={{
                    maxWidth: '150px',
                  }} 
                />
            </Center>
            <Center
                bg="#3c3c3c"
                py={{
                base: '6',
                md: '8',
                }}
                boxShadow={mode('sm', 'sm-dark')}
                borderRadius="lg"
            >
                <img src='https://raw.githubusercontent.com/HapticFinance/assets/da4d9e3f02d57da0e4782e1f0cd8342f553044db/haptic-logo-white.svg' />
            </Center>
        </SimpleGrid>
      </Stack>
    </Container>
  )

  export default LogoGrid;