
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


const Home = () => {

    return(
        <>
            <NavBar />
            <Header />
            <Banner />
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


