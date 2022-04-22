import { Box, Button, Container, Link, Heading, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import * as React from 'react'

export const CTA = () => (
  <Box as="section" bg="linear-gradient(-45deg, #4e339a,#33429a)" color="on-accent">
    <Container
      py={{
        base: '12',
        md: '20',
      }}
    >
      <Stack
        spacing={{
          base: '6',
          md: '8',
        }}
      >
        <Stack
          spacing={{
            base: '3',
            md: '4',
          }}
          align="center"
        >
          <Heading
            size={useBreakpointValue({
              base: 'sm',
              md: 'md',
            })}
          >
            Go to docs
          </Heading>
          <Text color="on-accent-muteed" maxW="2xl" textAlign="center" fontSize="xl">
            Learn our Haptic works under the hood
          </Text>
        </Stack>
        <Stack
          spacing="3"
          direction={{
            base: 'column',
            sm: 'row',
          }}
          justify="center"
        >
          <Link href="https://docs.haptic.finance/" target="_blank">
            <Button variant="outline" size="lg">
              Read more
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Container>
  </Box>
)

export default CTA;