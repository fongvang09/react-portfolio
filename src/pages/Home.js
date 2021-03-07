import React from "react";
// import { render } from "react-dom";
import Header from "../components/Header/index";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";

function Home() {
    return (
        <>
            <Router>
                <div>
                    <Header />
                    
                    <Wrapper>
                        {/* <Route exact path ="/" component={Home} /> */}
                        <Route exact path ="/contact" component={Contact} />
                        <Route exact path ="/portfolio" component={Portfolio} />
                    </Wrapper>
                </div>
            </Router>
            <Footer />
        </>
    )

}

export default Home;