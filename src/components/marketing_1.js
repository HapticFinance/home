import React from 'react';
import { Box, SimpleGrid, Stat, StatLabel, StatNumber, StatHelpText,Square, Heading, Text, Button, Flex, Image, Link, useColorMode, Grid } from '@chakra-ui/react';
import styled from '@emotion/styled';
import {isMobile} from "react-device-detect";

import {Banner} from "../views/Banner";

const Marketing = ({...props}) => {

    const styledGrid = {
        width: "100%",
        height: "180px",
        background: "linear-gradient(-45deg, #4e339a,#33429a)",
        paddingLeft:"10%",
        paddingRight:"10%",
    }
    const styledBtn = {
        color:"#33429a",
        background:"white",
        height:"30px",
        marginTop:"10px"
    }

    const kain = {
        background: "-webkit-linear-gradient(#FDB931, #FFD700)",
        webkitBackgroundClip: "text",
        webkitTextFillColor: "transparent"
    }
    const uniswap = {
        background: "-webkit-linear-gradient(#FF007B, #F76BB8)",
        webkitBackgroundClip: "text",
        webkitTextFillColor: "transparent"
    }

    return ( 
        !isMobile ?
            <div style={styledGrid}>
                <Grid templateColumns="repeat(10, 2fr)" gap={10} style={{paddingTop:"50px", padding:"40px"}} >
                    <Box style={{ border:"0px solid white"}} width={"55px"} height={"55px"} >
                        <Square size="12" borderRadius="md" >
                            <img 
                                src='https://raw.githubusercontent.com/HapticFinance/assets/main/aelin.jpeg' 
                                style={{
                                borderRadius:'25px'
                                }}
                            />
                        </Square>
                    </Box>
                    <Link isExternal={true} href="https://docs.haptic.finance/aelin" >

                    <Box style={{ border:"0px solid white"}} width={"250px"}>
                    <div style={{color:"white", fontWeight:"bold"}}>
                        <p style={{fontSize:"21px"}}>Haptic seed round </p>
                        <p style={kain}>Upcoming on Aelin.xyz</p>
                        <Button style={styledBtn}>Learn more</Button>

                    </div>
                </Box>
                </Link>
                    <Box style={{ border:"0px solid white"}} width={"55px"} height={"55px"} >
                        <Square size="12" backgroundColor={"white"} borderRadius={"100%"} >
                            <img 
                                src='https://upload.wikimedia.org/wikipedia/commons/e/e7/Uniswap_Logo.svg' 
                                width="30px"
                                style={{
                                borderRadius:'25px'
                                }}
                            />
                        </Square>
                    </Box>
                    <Link isExternal={true} href="https://www.nasdaq.com/articles/half-of-uniswap-liquidity-providers-are-losing-money" >
                    <Box style={{ border:"0px solid white"}} width={"250px"}>
                        <div style={{color:"white", fontWeight:"bold"}}>
                                <p style={{fontSize:"21px"}}>Half of Uniswap LP </p>
                                <p style={uniswap}>lost collectively</p>
                                <p><span style={{fontSize:"26px", color:"#d7dbe0"}}>$260M</span> in 2021</p>

                        </div>
                    </Box>
                </Link>
                    <Box style={{ border:"0px solid white"}} width={"55px"} height={"55px"} >
                        <Square size="12" backgroundColor={"white"} borderRadius={"100%"} >
                            <img 
                                src='https://raw.githubusercontent.com/HapticFinance/assets/main/kain.png' 
                            />
                        </Square>
                    </Box>
                    <Link isExternal={true} href="https://twitter.com/search?q=%23L222" >
                    <Box style={{ border:"0px solid white"}} width={"250px"}>
                        <div style={{color:"white", fontWeight:"bold"}}>
                                <p style={{fontSize:"21px"}}>Mentored by </p>
                                <p style={kain}>Kain Warwick 👑</p>
                                <p><span style={{fontSize:"26px", color:"#d7dbe0"}}>#L222</span> </p>

                        </div>
                    </Box>
                </Link>
                </Grid>
 
            </div>
        :
        <Banner />
    );
}

export default Marketing;