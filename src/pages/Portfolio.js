import React from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
import "./Portfolio.css";
// import Images from "../Images";
import Images from "../Images/Images";

function Portfolio() {
    return (
        <>
            <section class="container">
                <div class="row col-md-12 card card-body">
                <h2><b>Portfolio</b></h2>
                </div>
            </section>
            <br/>
            <section class="text">
                <div class="container">
                    <div class="row">
                        <ul class="col-md-6 col-sm-6">
                            <li>
                                <h3>Horiseon website</h3>
                            </li>
                            <li>
                                <div><img src="../Images/horiseonss.JPG" alt="horiseon webpage screenshot" class="portfolio-img" /></div>
                                <div><img key={1} src={Images} alt="horiseon webpage screenshot" class="portfolio-img" /></div>
                            </li>
                            <li>Deployed link: <a href="https://fongvang09.github.io/horiseon/"
                                target="_blank">https://fongvang09.github.io/horiseon/</a></li>
                            <li>GitHub repository: <a href="https://github.com/fongvang09/horiseon" target="_blank">https://github.com/fongvang09/horiseon</a></li>
                        </ul>
                        <ul class="col-md-6 col-sm-6">
                            <li>
                                <h3>Weather app</h3>
                            </li>
                            <li>
                                <div><img src="./images/weather-dashboard-ss.JPG" alt="weather dashboard screenshot" class="portfolio-img" />
                                </div>
                            </li>
                            <li>Deployed link: <a href="https://fongvang09.github.io/Weather-Dashboard/"
                                target="_blank">https://fongvang09.github.io/Weather-Dashboard/</a></li>
                            <li>GitHub repository: <a href="https://github.com/fongvang09/Weather-Dashboard" target="_blank">https://github.com/fongvang09/Weather-Dashboard</a></li>
                        </ul>
                    </div>

                    <div class="row">
                        <ul class="col-md-6 col-sm-6">
                        <li>
                            <h3>Note Taker</h3>
                        </li>
                        <li>
                            <div><img src="./images/note-taker-ss.JPG" alt="note taker screenshot" class="portfolio-img" />
                            </div>
                        </li>
                        <li>Deployed link: <a href="https://still-reef-79843.herokuapp.com/"
                            target="_blank">https://still-reef-79843.herokuapp.com/</a></li>
                        <li>GitHub repository: <a href="https://github.com/fongvang09/Note-Taker" target="_blank">https://github.com/fongvang09/Note-Taker</a></li>
                        </ul>
                        <ul class="col-md-6 col-sm-6">
                        <li>
                            <h3>Password generator</h3>
                        </li>
                        <li>
                            <div><img src="./images/pwgenss.JPG" alt="password generator screenshot" class="portfolio-img" /></div>
                        </li>
                        <li>Deployed link: <a href="https://fongvang09.github.io/Password-Generator/"
                            target="_blank">https://fongvang09.github.io/Password-Generator/</a></li>
                        <li>GitHub repository: <a href="https://github.com/fongvang09/Password-Generator" target="_blank">https://github.com/fongvang09/Password-Generator</a></li>
                        </ul>
                    </div>
                    <div class="row">
                        <ul>
                        <li>
                            <h3>1st Group Project</h3>
                        </li>
                        <li><img src="./images/flickfinderss.JPG" alt="flick finder website screenshot" class="portfolio-img" /></li>
                        <li>Deployed link: <a href="https://elderbass.github.io/API-Project-Treecko/"
                            target="_blank">https://elderbass.github.io/API-Project-Treecko/</a></li>
                        <li>GitHub repository: <a href="https://github.com/ElderBass/API-Project-Treecko" target="_blank">https://github.com/ElderBass/API-Project-Treecko</a></li>
                        </ul>
                    </div>
                    <div class="row">
                        <ul>
                        <li>
                            <h3>2nd Group Project</h3>
                        </li>
                            <div class="row">
                                <div class="col-md-6">
                                <li><img src="./images/demo1.gif" alt="website deployed gif" class="portfolio-img" /></li>
                                </div>
                                <div class="col-md-6">
                                <li><img src="./images/gif2.gif" alt="website deployed gif" class="portfolio-img" /></li>
                                </div>
                            </div>
                        <li>Deployed link: <a href="https://infinite-savannah-89804.herokuapp.com/"
                            target="_blank">https://infinite-savannah-89804.herokuapp.com/</a></li>
                        <li>GitHub repository: <a href="https://github.com/mesgt/charmeleon" target="_blank">https://github.com/mesgt/charmeleon</a></li>
                        </ul>
                    </div>
                </div>
            </section>
            <hr/>
            <br />
            <div class="container">
                <p>Feel free to click on the links below to access my GitHub and LinkedIn profile pages.</p>
                <ul>
                    <li>GitHub: <a href="https://github.com/fongvang09" target="_blank">https://github.com/fongvang09</a></li>
                    <li>LinkedIn: <a href="https://www.linkedin.com/in/fong-vang-1aa673163/"
                        target="_blank">https://www.linkedin.com/in/fong-vang-1aa673163/</a></li>
                    <li>Resume via Indeed: <a href="https://my.indeed.com/p/fongv-cdelllk/pdf" target="_blank">https://my.indeed.com/p/fongv-cdelllk/pdf</a></li>
                </ul>
            </div>
        </>
    );
}

export default Portfolio;