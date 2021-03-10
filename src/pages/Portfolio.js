import React from "react";
import "./Portfolio.css";
import image1 from "../Images/horiseonss.JPG";
import image2 from "../Images/weather-dashboard-ss.JPG";
import image3 from "../Images/note-taker-ss.JPG";
import image4 from "../Images/pwgenss.JPG";
import image5 from "../Images/flickfinderss.JPG";
import image6 from "../Images/demo1.gif";
import image7 from "../Images/gif2.gif";

function Portfolio() {
    return (
        <>
            <body className="bodybgc">
                <br/>
                <section className="container">
                    <div className="row col-md-12 card card-body">
                    <h2><b>Portfolio</b></h2>
                    </div>
                </section>
                <br/>
                <section className="text">
                    <div className="container">
                        <div className="row">
                            <ul className="col-md-6 col-sm-6">
                                <li>
                                    <h3>Horiseon website</h3>
                                </li>
                                <li>
                                    <div><img src={image1} alt="horiseon webpage screenshot" className="portfolio-img" /></div>
                                </li>
                                <li>Deployed link: <a href="https://fongvang09.github.io/horiseon/"
                                    target="_blank" rel="noreferrer">https://fongvang09.github.io/horiseon/</a></li>
                                <li>GitHub repository: <a href="https://github.com/fongvang09/horiseon" target="_blank" rel="noreferrer">https://github.com/fongvang09/horiseon</a></li>
                            </ul>
                            <ul className="col-md-6 col-sm-6">
                                <li>
                                    <h3>Weather app</h3>
                                </li>
                                <li>
                                    <div><img src={image2} alt="weather dashboard screenshot" className="portfolio-img" />
                                    </div>
                                </li>
                                <li>Deployed link: <a href="https://fongvang09.github.io/Weather-Dashboard/"
                                    target="_blank" rel="noreferrer">https://fongvang09.github.io/Weather-Dashboard/</a></li>
                                <li>GitHub repository: <a href="https://github.com/fongvang09/Weather-Dashboard" target="_blank" rel="noreferrer">https://github.com/fongvang09/Weather-Dashboard</a></li>
                            </ul>
                        </div>

                        <div className="row">
                            <ul className="col-md-6 col-sm-6">
                            <li>
                                <h3>Note Taker</h3>
                            </li>
                            <li>
                                <div><img src={image3} alt="note-taker screenshot" className="portfolio-img" />
                                </div>
                            </li>
                            <li>Deployed link: <a href="https://still-reef-79843.herokuapp.com/"
                                target="_blank" rel="noreferrer">https://still-reef-79843.herokuapp.com/</a></li>
                            <li>GitHub repository: <a href="https://github.com/fongvang09/Note-Taker" target="_blank" rel="noreferrer">https://github.com/fongvang09/Note-Taker</a></li>
                            </ul>
                            <ul className="col-md-6 col-sm-6">
                            <li>
                                <h3>Password generator</h3>
                            </li>
                            <li>
                                <div><img src={image4} alt="password generator screenshot" className="portfolio-img" /></div>
                            </li>
                            <li>Deployed link: <a href="https://fongvang09.github.io/Password-Generator/"
                                target="_blank" rel="noreferrer">https://fongvang09.github.io/Password-Generator/</a></li>
                            <li>GitHub repository: <a href="https://github.com/fongvang09/Password-Generator" target="_blank" rel="noreferrer">https://github.com/fongvang09/Password-Generator</a></li>
                            </ul>
                        </div>
                        <div className="row">
                            <ul>
                            <li>
                                <h3>1st Group Project</h3>
                            </li>
                            <li><img src={image5} alt="flick finder website screenshot" className="portfolio-img" /></li>
                            <li>Deployed link: <a href="https://elderbass.github.io/API-Project-Treecko/"
                                target="_blank" rel="noreferrer">https://elderbass.github.io/API-Project-Treecko/</a></li>
                            <li>GitHub repository: <a href="https://github.com/ElderBass/API-Project-Treecko" target="_blank" rel="noreferrer">https://github.com/ElderBass/API-Project-Treecko</a></li>
                            </ul>
                        </div>
                        <div className="row">
                            <ul>
                            <li>
                                <h3>2nd Group Project</h3>
                            </li>
                                <div className="row">
                                    <div className="col-md-6">
                                    <li><img src={image6} alt="website deployed gif" className="portfolio-img" /></li>
                                    </div>
                                    <div className="col-md-6">
                                    <li><img src={image7} alt="website deployed gif" className="portfolio-img" /></li>
                                    </div>
                                </div>
                            <li>Deployed link: <a href="https://infinite-savannah-89804.herokuapp.com/"
                                target="_blank" rel="noreferrer">https://infinite-savannah-89804.herokuapp.com/</a></li>
                            <li>GitHub repository: <a href="https://github.com/mesgt/charmeleon" target="_blank" rel="noreferrer">https://github.com/mesgt/charmeleon</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <hr/>
                <br />
                <div className="container">
                    <p>Feel free to click on the links below to access my GitHub and LinkedIn profile pages.</p>
                    <ul>
                        <li>GitHub: <a href="https://github.com/fongvang09" target="_blank" rel="noreferrer">https://github.com/fongvang09</a></li>
                        <li>LinkedIn: <a href="https://www.linkedin.com/in/fong-vang-1aa673163/"
                            target="_blank" rel="noreferrer">https://www.linkedin.com/in/fong-vang-1aa673163/</a></li>
                        <li>Resume via Indeed: <a href="https://my.indeed.com/p/fongv-cdelllk/pdf" target="_blank" rel="noreferrer">https://my.indeed.com/p/fongv-cdelllk/pdf</a></li>
                    </ul>
                </div>
            </body>
        </>
    );
}

export default Portfolio;