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
    useColorModeValue
  } from '@chakra-ui/react'
  import React, {useState} from 'react'
  import styled from 'styled-components';

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  const StyledContainer = styled(ToastContainer)`
  // https://styled-components.com/docs/faqs#how-can-i-override-styles-with-higher-specificity
  &&&.Toastify__toast-container {}
  .Toastify__toast {}
  .Toastify__toast-body {}
  .Toastify__progress-bar {}
`;

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

    async function OnClick(event) {
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
    
      const response = await fetch(functionURL, {
        method: "post",
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        body: new URLSearchParams({ fromEmail }).toString(),
      })
       
      if (response.status === 200) {
        setStateFulData({ 
          ...stateFulData, 
          error: null, 
          submitting: false, 
          success: true 
        })

        toast("Success!");
      } else {
          const json = await response.json()
          setStateFulData({ 
            ...stateFulData, 
            error: json.error, 
            submitting: false, 
            success: false
          })
          toast(json.error);
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
            boxShadow={useColorModeValue('lg', 'lg-dark')}
            marginTop="5%"

          >
            <div style={{maxWidth:"90%", marginLeft:"12%", marginRight:"12%"}}>

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
                  Keep up with Haptic
                </Heading>
                <Text
                  fontSize={{
                    base: 'lg',
                    md: 'xl',
                  }}
                  color="subtle"
                >
                  Subscribe to receive early announcements
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
                <FormHelperText color="subtle">
                  We won't sell your information
                </FormHelperText>
              </FormControl>
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={OnClick}  
                  disabled={stateFulData.submitting}
                  _hover={{
                    background: 'white',
                    color: '#33429a',
                  }}
                  _active={{
                    background: 'white !important',
                    color: '#33429a',
                  }}
                >
                  {stateFulData.submitting === true ? "Sending..." : stateFulData.success === true ? "Done" : "Subscribe"}
                </Button>
              </Stack>
            </Stack>
            </div>
          </Box>

      </Box>
    )
  } 
  export default Newsletter;