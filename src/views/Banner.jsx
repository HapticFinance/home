import {
    Box,
    Button,
    CloseButton,
    Container,
    Icon,
    Link,
    Square,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { BiCookie } from 'react-icons/bi'
  
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
          <CloseButton
            display={{
              md: 'none',
            }}
            position="absolute"
            right="2"
            top="2"
          />
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
                  <Icon as={BiCookie} boxSize="6" />
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
                  We are launching an Aelin Round soon, stay tuned for official dates.
                </Text>
                <Text color="muted">
                  Read our <Link>Cookie Policy</Link>
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
              <Button variant="secondary" isFullWidth>
                Reject
              </Button>
              <Button variant="primary" isFullWidth>
                Allow
              </Button>
              <CloseButton
                display={{
                  base: 'none',
                  md: 'inline-flex',
                }}
              />
            </Stack>
          </Stack>
        </Box>
      </Container>
    )
  }

  export default Banner;