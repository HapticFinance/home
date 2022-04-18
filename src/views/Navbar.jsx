import {
    Box,
    ButtonGroup,
    Container,
    Divider,
    HStack,
    IconButton,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { FaGithub, FaDiscord, FaMedium, FaTwitter } from 'react-icons/fa'

  
  export const Navbar = () => {
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
                <HStack spacing="10">
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
                </HStack>
            </HStack>
          </Container>
        </Box>
        <Divider />
      </Box>
    )
  }

export default Navbar;