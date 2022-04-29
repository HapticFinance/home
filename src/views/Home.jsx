
// 1.1 Import Views
import NavBar from "./Navbar";
import Header from "./Header";
import Features from "./Features"
import Banner from "./Banner";
import Roadmap from "./Roadmap";
import Footer from "./Footer";
import Team from "./Team";
import Lenders from "./Lenders";
import CTA from './CTA';
import Content from "./Content";
import Composability from "./Composability";
import Newsletter from "./Newsletter";
import Marketing from "../components/marketing_1";

import {Box, SimpleGrid, Img, Text, useColorModeValue as mode} from '@chakra-ui/react';
const Home = () => {

    return(
        <>
            <NavBar />
            <Header />
            <Marketing />
            {/*<Banner />*/}
            <Content />
            <Lenders />
            <Features />
            <Composability />
            <CTA />
            <Team />
            <Roadmap />
            <Newsletter />
            <Footer />
        </>
    )
}


export default Home;


