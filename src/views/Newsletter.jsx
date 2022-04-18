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
  import React, {useState} from 'react'

  export const Newsletter = () => {
    const [emailAddress, setEmailAddress] = useState("");
    
    function validateEmail(email)  {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    }; 


    async function subscribe(event) {
      if (validateEmail(emailAddress)) {
        setEmailAddress(emailAddress);
        console.log(`email is ${emailAddress}`);

      } else {
        console.log("invalid input")
      }
    }

    async function validateEmail(event) {
      let value = event.target.value;

    }

    return (
        <Box bgGradient="linear(to-b, bg-accent 50%, bg-canvas 50%, )">
        <Container
          py={{
            base: '16',
            md: '24',
          }}
        >
          <Box
            bg="linear-gradient(-45deg, #4e339a,#33429a)"
            color="white"
            py={{
              base: '10',
              md: '16',
            }}
            px={{
              base: '6',
              md: '16',
            }}
            borderRadius="lg"
            boxShadow={useColorModeValue('lg', 'lg-dark')}
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
                  Be the first to know
                </Heading>
                <Text
                  fontSize={{
                    base: 'lg',
                    md: 'xl',
                  }}
                  color="subtle"
                >
                  Stay tuned for protocol announcements
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
                  <Input type="email" size="lg" placeholder="Enter your email" onChange={validateEmail}/>
                  <FormHelperText color="subtle">We send you at most one mail per month</FormHelperText>
                </FormControl>
                <Button variant="primary" size="lg" onClick={subscribe}>
                  Subscribe
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Container>
      </Box>
    )
  }

console.log()

  export default Newsletter;