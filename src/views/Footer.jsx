import { ButtonGroup, Container, IconButton, Stack, Text } from '@chakra-ui/react'
import * as React from 'react'
import { FaGithub, FaDiscord, FaMedium, FaTwitter } from 'react-icons/fa'
// import { FooterLogo } from './FooterLogo'

export const Footer = () => (
  <Container
    as="footer"
    role="contentinfo"
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
      <Stack justify="space-between" direction="row" align="center">
        <img 
          src='https://raw.githubusercontent.com/HapticFinance/assets/main/haptic.svg' 
          style={{
            maxWidth:'100px',
          }}
        />
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            href="https://twitter.com/hapticfinance"
            aria-label="Twitter"
            icon={<FaTwitter fontSize="1.25rem" />}
          />
          <IconButton 
            as="a" 
            href="https://discord.gg/ahJVRvjyzk" 
            aria-label="Discord" 
            icon={<FaDiscord fontSize="1.25rem" />} 
          />
          <IconButton
            as="a"
            href="https://medium.com/@hapticfinance"
            aria-label="Medium"
            icon={<FaMedium fontSize="1.25rem" />}
          />
          <IconButton 
            as="a" 
            href="https://github.com/HapticFinance" 
            aria-label="GitHub" 
            icon={<FaGithub fontSize="1.25rem" />} 
          />
        </ButtonGroup>
      </Stack>
      <Text fontSize="sm" color="border">
        &copy; {new Date().getFullYear()} Haptic Finance. All rights reserved.
      </Text>
    </Stack>
  </Container>
)

export default Footer;