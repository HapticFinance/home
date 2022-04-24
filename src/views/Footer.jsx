import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  IconButton,
  Img,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import * as React from 'react'
import { FaDiscord, FaGithub, FaMedium, FaTwitter } from 'react-icons/fa'
import { links } from './_footerData'

export const Footer = () => (
  <Box bg="bg-surface">
    <Container as="footer" role="contentinfo" padding="0 2.5em">
      <Stack
        justify="space-between"
        align="center"
        direction={{
          base: 'column',
          lg: 'row',
        }}
        py={{
          base: '12',
          md: '16',
        }}
        spacing="8"
      >
        <Stack
          spacing={{
            base: '6',
            md: '8',
          }}
          align="center"
        >
          <Img 
            src="https://raw.githubusercontent.com/HapticFinance/assets/main/haptic.svg" 
            minW="15vh" 
          />
        </Stack>
        <SimpleGrid
          columns={{
            base: 2,
            md: 4,
          }}
          gap="8"
          width={{
            base: 'full',
            lg: 'auto',
          }}
        >
          {links.map((group, idx) => (
            <Stack
              key={idx}
              spacing="4"
              minW={{
                lg: '40',
              }}
            >
              <Text fontSize="sm" fontWeight="semibold" color="subtle">
                {group.title}
              </Text>
              <Stack spacing="3" shouldWrapChildren>
                {group.links.map((link, idx) => (
                  <Button key={idx} as="a" variant="link" href={link.href}>
                    {link.label}
                  </Button>
                ))}
              </Stack>
            </Stack>
          ))}
        </SimpleGrid>
      </Stack>
      <Divider />
      <Stack
        pt="8"
        pb="12"
        justify="space-between"
        direction={{
          base: 'column-reverse',
          md: 'row',
        }}
        align="center"
      >
        <Text fontSize="sm" color="subtle">
          &copy; {new Date().getFullYear()} Haptic Finance. All rights reserved.
        </Text>
        <ButtonGroup variant="ghost">
          <IconButton as="a" href="https://twitter.com/hapticfinance" aria-label="Twitter" icon={<FaTwitter />} />
          <IconButton as="a" href="https://discord.gg/ahJVRvjyzk" aria-label="Discord" icon={<FaDiscord />} />
          <IconButton as="a" href="https://medium.com/@hapticfinance" aria-label="Medium" icon={<FaMedium />} />
          <IconButton as="a" href="https://github.com/HapticFinance" aria-label="Github" icon={<FaGithub />} />
        </ButtonGroup>
      </Stack>
    </Container>
  </Box>
)

export default Footer;