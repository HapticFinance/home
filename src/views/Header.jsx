import {
    Box,
    Button,
    Flex,
    Heading,
    Img,
    SimpleGrid,
    Text,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
  import React, { useEffect, useState } from "react";
import { isMobile } from 'react-device-detect';
  
  const calculateTimeLeft = () => {
    
      let year = new Date().getFullYear();
      let difference = +new Date(`05/09/${year}`) - +new Date();
      let timeLeft = {};
    
      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
    
      return timeLeft;
  }

  export function Header() {

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [year] = useState(new Date().getFullYear());

      useEffect(() => {
        const timer = setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
      });

      const timerComponents = [];

      Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
          return;
        }
        let intervalLabel = interval == "minutes" ? "min" : interval == "seconds" ? "sec" : interval;
        timerComponents.push(
          <span>
            {timeLeft[interval]} {intervalLabel}{" "}
          </span>
        );
      });
      
      const CountDown = () => {
        return (
          <div style={isMobile ? {} :{float:"left", marginLeft:"-45%", marginTop:"15%"}}>
            <Stat>
              <StatLabel><h1 style={{fontSize:"19px"}}>Seed round starts in:</h1></StatLabel>
              <StatNumber style={{marginTop:"10px"}}>
                {timerComponents.length ? timerComponents : <span>Time's up!</span>}
              </StatNumber>
              <StatHelpText style={{fontSize:"16px", marginTop:"10px"}}>Lasts May 7 to May 21</StatHelpText>
            </Stat>
            <br />
            <br />
          </div>
        );
      }

    return (
      <Box 
        as="section" 
        pt="24" 
        pb="12" 
        overflow="hidden"
      >
        <Box
          bgImage="https://raw.githubusercontent.com/HapticFinance/assets/main/background.png"
          bgPosition="left center"
          bgRepeat="no-repeat"
          bgSize="65%"
          maxW={{
            base: 'xl',
            md: '7xl',
          }}
          mx="auto"
          px={{
            base: '6',
            md: '8',
          }}
        >
          <Flex
            align="flex-start"
            direction={{
              base: 'column',
              lg: 'row',
            }}
            justify="space-between"
            mb="20"
          >
            <Img
              pos="relative"
              w="25rem"
              display={{ 
                lg:'inherit', 
                sm:'none',
              }}
            />
            <Box
              flex="1"
              pt="6"
            > 
              {/*<CountDown />*/} 
              <Heading as="h1" size="3xl" mt="8" fontWeight="extrabold" textAlign="right">
                Bridging decentralized finance
              </Heading>

              <Text color={mode('gray.600', 'gray.400')} mt="5" fontSize="xl" textAlign="right" maxW={{ lg: 'xl'}} marginLeft={"25%"}>
                Haptic is designed to increase capital efficiency and reduce impermanent loss across automated market makers.
              </Text>
            </Box>
            <Box
              boxSize={{
                base: '20',
                lg: '8',
              }}
            />
          </Flex>

        </Box>
      </Box>
    )
  }

  export default Header;