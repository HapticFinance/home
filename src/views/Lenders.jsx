import { Container, Img, Flex, Box, Heading, SimpleGrid, Stack, Text, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import { LendersStat } from './LendersStat'
import { isMobile } from 'react-device-detect'
import { Stat } from '../components/Stat'
const stats = [
  {
    label: 'Protection',
    value: '100%',
  },
  {
    label: 'Staking APR',
    value: '180%',
  },
  {
    label: 'Low protocol fees',
    value: '0.3%',
  },
]


export const Lenders = () => {

return (
      <Box as="section" py="24" marginTop="-80px">
        <Box
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
            direction={{
              base: 'column',
              lg: 'row',
            }}
            justify="space-between"
          >
            <Stack maxW="xl" spacing="6">
              <Heading size="xl" fontWeight="extrabold">
                How does it work?
              </Heading>
              <Text
                fontSize="lg"
                fontWeight="small"
              >
                  Stakers deposit Haptic network token (HAP) as a collateral, enabling the issuance of US dollar denominated debt. The pooled collateral model enables deep liquidity and eliminates the need for counterparts. Borrowers deposit ETH to get a stablecoin loan from a supported procotol and use the funds to provide liquidity on Uniswap. Haptic protocol tracks impermanent loss and provides compensation to honest borrowers, along with the exchange fees generated by their liquidity. Stakers are rewarded for their role with staking rewards and treasury yields.
              </Text>

            </Stack>
            <Box
              as="section"
              py={{
                base: '4',
                md: '2',
              }}
              textAlign="center"
              px={{
                base: '8',
                md: '15%',
                sm: '0',
              }}
            >
              <SimpleGrid
                gap={{
                  base: '4',
                  md: '4',
                }}
              >
                {stats.map(({ label, value }) => (
                  <Stat key={label} label={label} value={value} />
                ))}
              </SimpleGrid>
            </Box>
          </Flex>
          <Box>
            <Text color={mode('gray.600', 'gray.400')} fontWeight="bold" marginTop="50px">
              Interacts with:
            </Text>
            <SimpleGrid
              mt="8"
              columns={{
                base: 2,
                md: 3,
                lg: 6,
              }}
              color="gray.500"
              alignItems="center"
              spacing={{
                base: '12',
                lg: '24',
              }}
              fontSize="2xl"
            >
              <Img src='https://raw.githubusercontent.com/HapticFinance/assets/main/optimism.svg' minW='10vw' maxW='30vw' />
              <Img src='https://raw.githubusercontent.com/HapticFinance/assets/main/synthetix.svg' minW='10vw' maxW='30vw' />
              <Img src='https://raw.githubusercontent.com/HapticFinance/assets/main/lyra.svg' minW='10vw' maxW='30vw' />
              <Img src='https://raw.githubusercontent.com/HapticFinance/assets/main/perpetual.svg' minW='10vw' maxW='30vw' />
              <Img src='https://raw.githubusercontent.com/HapticFinance/assets/main/uniswap.svg' minW='10vw' maxW='30vw' />
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
)

}


export default Lenders;