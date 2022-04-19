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
    let stateObj =  {
      buttonDisabled: true,
      message: { fromEmail: "" },
      submitting: false,
    } 
    const functionURL = "https://lion-barracuda-2686.twil.io/send-email"

    const [stateFulData, setStateFulData] = useState(stateObj);
    
    function validateEmail(email)  {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    }; 


    function sleep (ms)  {
      return new Promise(resolve => setTimeout(resolve, ms));
     }

    async function onClick(event) {
      event.preventDefault()
      setStateFulData({ ...stateFulData, submitting: true })

      let { fromEmail, address, body } = stateFulData.message
  
      const isEmail = validateEmail(fromEmail)

      console.log(`isEmail ${fromEmail} ${isEmail}`)
  
      if (isEmail === null) {
        let obj = {
          ...stateFulData,
        }
        obj.submitting = false
        obj.success = false
        obj.error = "Invalid email address"
        setStateFulData(obj)
        return
      }
  
      let subject = "Subscribe to Haptic mailing list";
      body = `I want to be subscribed to the Haptic mailing list, email ${fromEmail}`
  
      await sleep(1500)
  
      const response = await fetch(functionURL, {
        method: "post",
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        body: new URLSearchParams({ fromEmail }).toString(),
      })
       
      if (response.status === 200) {
        this.setState({
          error: null,
          submitting: false,
          success: true,
          message: {
            fromEmail: "",
            subject: "",
            body: "",
          },
        })
      } else {
        const json = await response.json()
        this.setState({
          error: json.error,
          submitting: false,
        })
      }
    }
 

    async function onChange(event) {
      let obj = {
        ...stateFulData,
      }
      obj.message.fromEmail = event.target.value
      setStateFulData(obj)
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
                  <Input type="email"            
                    name="fromEmail"
                    id="fromEmail"
                    value={stateFulData.message.fromEmail} 
                    size="lg" 
                    placeholder="Enter your email" 
                    color={"black"} 
                    onChange={onChange}
                  />
                    <FormHelperText color="subtle">We send you at most one mail per month</FormHelperText>
                </FormControl>
                <Button variant="primary" size="lg" onClick={onClick}  disabled={stateFulData.submitting}>
                  {stateFulData.submitting === true ? "Sending..." : stateFulData.success === true ? "Done" : "Subscribe"}
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Container>
      </Box>
    )
  } 
  export default Newsletter;