import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Divider,
    HStack,
    IconButton,
    useBreakpointValue,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { FiMenu } from 'react-icons/fi'
  import { NavbarLogo } from './NavbarLogo'
  import { FaGithub, FaDiscord, FaMedium, FaTwitter } from 'react-icons/fa'

  
  export const Navbar = () => {
    const isDesktop = useBreakpointValue({
      base: false,
      lg: true,
    })
    return (
      <Box
        as="section"
      >
        <Box
          as="nav"
          bg="bg-surface"
          py={{
            base: '4',
            lg: '5',
          }}
        >
          <Container>
            <HStack spacing="10" justify="space-between">
              <img 
                src='https://raw.githubusercontent.com/HapticFinance/assets/main/haptic.svg' 
                style={{
                  maxWidth:'100px'
                }}
              />
              {isDesktop ? (
                <HStack spacing="10">
                  <ButtonGroup variant="link" spacing="8">
                  <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            href="https://twitter.com/hapticfinance"
            target="_blank" 
            aria-label="Twitter"
            icon={<FaTwitter fontSize="1.25rem" />}
          />
          <IconButton 
            as="a" 
            href="https://discord.gg/ahJVRvjyzk" 
            target="_blank" 
            aria-label="Discord" 
            icon={<FaDiscord fontSize="1.25rem" />} 
          />
          <IconButton
            as="a"
            href="https://medium.com/@hapticfinance"
            target="_blank" 
            aria-label="Medium"
            icon={<FaMedium fontSize="1.25rem" />}
          />
          <IconButton 
            as="a" 
            href="https://github.com/HapticFinance"
            target="_blank" 
            aria-label="GitHub" 
            icon={<FaGithub fontSize="1.25rem" />} 
          />
        </ButtonGroup>
                  </ButtonGroup>
                  <Box>
                    <Button 
                      background="linear-gradient(-45deg, #4e339a,#33429a)"
                      color="white"
                      variant="primary" 
                      py="10" 
                      px="6" 
                      my="-5" 
                      borderRadius="0"
                    >
                      Announcement
                    </Button>
                  </Box>
                </HStack>
              ) : (
                <IconButton
                  variant="ghost"
                  icon={<FiMenu fontSize="1.25rem" />}
                  aria-label="Open Menu"
                />
              )}
            </HStack>
          </Container>
        </Box>
        <Divider />
      </Box>
    )
  }

export default Navbar;