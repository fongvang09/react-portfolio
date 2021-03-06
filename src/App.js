import React from "react";
// import ReactDOM from "react-dom";
import Home from "./pages/Home";
// import Wrapper from "./components/Wrapper";
import "./pages/Portfolio.css";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Link, Route } from "react-router-dom";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  document.title = "Fong's Portfolio"
  return (
    <>
      <div className="bodybgc">
        <Router>
          <Header />
          {/* <Wrapper> */}
          <Switch>
            {/* <Link exact path ="/" component={Home} /> */}

            <Route exact path ="/" component={Home} />
            <Route exact path ="/index" component={Home} />
            <Route exact path ="/contact" component={Contact} />
            <Route exact path ="/portfolio" component={Portfolio} />

            {/* <Link to="/#" component={Home} />
            <Link to="/index" component={Home} />
            <Link to="/contact" component={Contact} />
            <Link to="/portfolio" component={Portfolio} /> */}

            {/* <Route to="/index" component={Home}/>
            <Route to="/contact" component={Contact}/>
            <Route to="/portfolio" component={Portfolio}/> */}

          {/* </Wrapper> */}
          </Switch>
        </Router>
      </div>
      <Footer />
    </>
  )
}

export default App;
