import {
    Box,
    Button,
    Container,
    FormControl,
    FormHelperText,
    Heading,
    Input,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue,
  } from '@chakra-ui/react'
  import * as React from 'react'
  
  export const Newsletter = () => (
    <Box bgGradient="linear(to-b, bg-accent 50%, bg-canvas 50%, )">
      <Container
        py={{
          base: '16',
          md: '24',
        }}
      >
        <Box
          bg="bg-surface"
          py={{
            base: '10',
            md: '16',
          }}
          px={{
            base: '6',
            md: '16',
          }}
          borderRadius="lg"
          boxShadow={useColorModeValue('sm', 'sm-dark')}
        >
          <Stack
            spacing={{
              base: '8',
              md: '8',
            }}
            direction={{
              base: 'column',
              lg: 'row',
            }}
            justify="space-between"
          >
            <Stack
              spacing={{
                base: '4',
                md: '5',
              }}
            >
              <Heading
                size={useBreakpointValue({
                  base: 'sm',
                  md: 'md',
                })}
              >
                Sign up for our newsletter
              </Heading>
              <Text
                fontSize={{
                  base: 'lg',
                  md: 'xl',
                }}
                color="muted"
              >
                Be the first to know when we release new components
              </Text>
            </Stack>
            <Stack
              direction={{
                base: 'column',
                md: 'row',
              }}
              spacing="4"
              width="full"
              maxW={{
                base: 'md',
                xl: 'lg',
              }}
            >
              <FormControl>
                <Input type="email" size="lg" placeholder="Enter your email" />
                <FormHelperText color="subtle">We send you at most one mail per month</FormHelperText>
              </FormControl>
              <Button variant="primary" size="lg">
                Subscribe
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  )

  export default Newsletter;