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
                    {['Twitter', 'Medium', 'Discord', 'Github'].map((item) => (
                      <Button key={item}>{item}</Button>
                    ))}
                  </ButtonGroup>
                  <Box>
                    <Button 
                      background="linear-gradient(-45deg, #021b54, #462852)"
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