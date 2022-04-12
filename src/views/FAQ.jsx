import { Box, Center, Stack, StackDivider, Text } from '@chakra-ui/react'
import * as React from 'react'
import { posts } from './faqData'

export const FAQ = () => (
  <Center
    maxW="lg"
    mx="auto"
    py={{
      base: '4',
      md: '8',
    }}
  >
    <Box bg="bg-surface" py="4">
      <Stack divider={<StackDivider />} spacing="4">
        {posts.map((post) => (
          <Stack key={post.id} fontSize="sm" px="2" spacing="0.5">
            <Box>
              <Text fontWeight="medium" color="emphasized">
                {post.title}
              </Text>
              <Text color="subtle">Published {post.publishedAt}</Text>
            </Box>
            <Text
              color="muted"
              sx={{
                '-webkit-box-orient': 'vertical',
                '-webkit-line-clamp': '2',
                overflow: 'hidden',
                display: '-webkit-box',
              }}
            >
              Candy donut tart pudding macaroon. Soufflé carrot cake choc late cake biscuit jelly
              beans chupa chups dragée. Cupcake toffee gummies lemon drops halvah. Cookie fruitcake
              jelly beans gingerbread soufflé marshmallow.
            </Text>
          </Stack>
        ))}
      </Stack>
    </Box>
  </Center>
)

export default FAQ;