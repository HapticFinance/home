import {
    Box,
    Container,
    Heading,
    HStack,
    Icon,
    Link,
    SimpleGrid,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
  import { members } from './teamData'
  import { TeamSquareImage } from './TeamSquareImage'
  
  export const Team = () => (
    <Box bg="bg-surface">
      <Container
        py={{
          base: '16',
          md: '24',
        }}
      >
        <Stack
          spacing={{
            base: '12',
            md: '16',
          }}
        >
          <Stack spacing="3">
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
              >
                Meet our team
              </Heading>
            </Stack>
          </Stack>
          <SimpleGrid
            columns={{
              base: 1,
              md: 2,
              lg: 3,
            }}
            columnGap="8"
            rowGap={{
              base: '10',
              md: '16',
            }}
          >
            {members.map((member) => (
              <Box key={member.name}>
                <Stack spacing="4">
                  <Stack spacing={{base: '4', md: '5',}}>
                    <TeamSquareImage src={member.image} alt={member.name} />
                    <Stack>
                      <Box>
                        <Text fontSize="lg" fontWeight="medium">
                          {member.name}
                        </Text>
                        <Text color="accent">
                          {member.role}
                        </Text>
                      </Box>
                    </Stack>
                  </Stack>
                  <HStack spacing="4" color="subtle">
                    {[FaTwitter].map((item, id) => (
                      <Link href={member.twitter} key={id}>
                        <Icon as={item} boxSize="5" color="#47389a" />
                      </Link>
                    ))}
                    {[FaGithub].map((item, id) => (
                      <Link href={member.github} key={id}>
                        <Icon as={item} boxSize="5" color="#47389a" />
                      </Link>
                    ))}
                  </HStack>
                </Stack>
              </Box>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  )

  export default Team;