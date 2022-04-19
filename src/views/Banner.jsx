import {
    Box,
    Button,
    CloseButton,
    Container,
    Link,
    Square,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue,
  } from '@chakra-ui/react'
  import * as React from 'react'
  
  export const Banner = () => {
    const isMobile = useBreakpointValue({
      base: true,
      md: false,
    })
    return (
      <Container
        as="section"
        pt={{
          base: '4',
          md: '8',
        }}
        pb={{
          base: '12',
          md: '24',
        }}
      >
        <Box
          bg="bg-surface"
          px={{
            base: '4',
            md: '3',
          }}
          py={{
            base: '4',
            md: '2.5',
          }}
          position="relative"
          boxShadow={useColorModeValue('sm', 'sm-dark')}
          borderRadius="xl"
        >
          <Stack
            direction={{
              base: 'column',
              md: 'row',
            }}
            justify="space-between"
            spacing={{
              base: '3',
              md: '2',
            }}
          >
            <Stack
              spacing="4"
              direction={{
                base: 'column',
                md: 'row',
              }}
              align={{
                base: 'start',
                md: 'center',
              }}
            >
              {!isMobile && (
                <Square size="12" bg="bg-subtle" borderRadius="md">
                  <img 
                    src='https://raw.githubusercontent.com/HapticFinance/assets/main/aelin.jpeg' 
                    style={{
                      borderRadius:'25px'
                    }}
                  />
                </Square>
              )}
              <Stack
                spacing="0.5"
                pe={{
                  base: '4',
                  md: '0',
                }}
              >
                <Text fontWeight="medium">
                  Stay tuned for announcements on upcoming Aelin seed round.
                </Text>
                <Text color="muted">
                  <Link href='https://aelin.xyz/' target="_blank">Learn more about the Aelin protocol.</Link>
                </Text>
              </Stack>
            </Stack>
            <Stack
              direction={{
                base: 'column',
                sm: 'row',
              }}
              spacing={{
                base: '3',
                md: '2',
              }}
              align={{
                base: 'stretch',
                md: 'center',
              }}
            >
              <Link href="https://aelin.xyz" target="_blank">
                <Button 
                  bg="linear-gradient(-45deg, #4e339a,#33429a)"
                  color="white"
                  isFullWidth
                >
                  Read more
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Container>
    )
  }

  export default Banner;