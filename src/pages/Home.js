import React from "react";
// import { render } from "react-dom";
import Header from "../components/Header/index";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
// import "./Portfolio.css";

function Home() {
    return (
        <>
            <Router>
                <div>
                    <Header />
                    <Wrapper>
                        <Route exact path ="/contact" component={Contact} />
                        <Route exact path ="/portfolio" component={Portfolio} />
                    </Wrapper>
                </div>
            </Router>
            <h2><b>About Me</b></h2>
            <hr/>
            <section class="container">
                <div class="row">
                    <div class="col-md-12">
                        <article>
                            <div>
                                <img src="./images/fongvangpic.jpg" alt="Image of dude standing with hands behind his back" />
                                <p>Hello! Allow me to briefly introduce myself! My name is Fong Vang. I currently reside in Minneapolis. I
                                    enjoy eating food. What type of food you might ask? Well, I'm not much of a picky eater but I do love eating
                                    noodles with sriracha sauce for an added flavor, pizza, pho (a vietnamese noodle-base bowl) and steak to
                                    name a few.
                                    I enjoy playing games that are competitive whether that's on the PC or just any outdoor sports. As of now,
                                    I'm looking towards a new career within the programmer/developer field.
                                    Prior to picking up on coding, I worked at a steel mill right outside of St. Paul. Unfortunately, the mill
                                    went through a mass layoff due lack of demand but when one door closes, another one opens. Many of the more
                                    experienced workers there with decades of experience were laid off.
                                    To be forced to go out of your comfort zone and search for another job just before retirement is scary and
                                    somewhat of a setback. I digress but with that in mind, I have decided to continue my education and look
                                    where the future is.
                                    I want to keep improving on myself so I that won't have any regrets in the future thinking what I could have
                                    done differently. I look forward to completing the UofM coding bootcamp and honing my skills so that I may
                                    get back on track. Thank you for your time!
                                    Please feel free to contact me for anything! I look forward to speaking with you!
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
            <br/>
            <hr/>
            <br/>
            <section class="container">
                <div class="row col-md-12 card card-body">
                    <h2><b>More about me</b></h2>
                </div>
                <hr/>
                <div class="card">
                    <br/>
                    {/* don't delete. fix the styling. put into css folder or do inline css */}
                    {/* <p style="padding: 10px;">
                        Hello! The few following pictures in the following order left to right, top to bottom were from a few years
                        ago. Very briefly, <span style="font-weight: bold;">(1)</span>first photo consists of me and
                        a few of my good friends that we met from high school. This picture was taken at Chicago's Willis Tower
                        observation deck. <span style="font-weight: bold;">(2)</span>Second photo is just my friends
                        posing for fun as if they were in a business setting. This picture was taken at a hotel at Bangkok, Thailand.
                        <span style="font-weight: bold;">(3)</span>A temple that is inaccessible in the middle of a large pond
                        in Thailand. <span style="font-weight: bold;">(4)</span>A luxurious watch that I took a photo of from an
                        expensive store somewhere in Thailand. <span style="font-weight: bold;">(5)</span>A few of my friends and I
                        wanted to experience a new
                        way of eating so we went into a restaurant inside a mall in Thailand called MBK Center. All you can eat
                        hotpot-style while sitting next to the conveyor of food on a plate
                        prepped by chefs at the back. <span style="font-weight: bold;">(6)</span>Fishing is a part of me so here I am
                        posing with some walleyes that I caught at St. Cloud awhile back!
                    </p> */}
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 col-sm-6"><img src="./images/12957646_10208106303847059_5781334766809125067_o.jpg"
                                class="portfolio-img" alt="Group of friends at Chicago's Willis Tower observation deck taking selfie." />
                            </div>
                            <div class="col-md-6 col-sm-6"><img src="./images/14976477_10209856889770613_4681618712186986534_o.jpg"
                                class="portfolio-img" alt="Two guys exchanging notes and info at a hotel." />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 col-sm-6"><img src="./images/14991364_10209857016853790_4196552330444468827_o.jpg"
                                class="portfolio-img" alt="Thai temple in the middle of a pond inaccessible to public" />
                            </div>
                            <div class="col-md-6 col-sm-6"><img src="./images/15002500_10209856891090646_4831971174106407515_o.jpg"
                                    class="portfolio-img" alt="Luxurious watch inside glass box in a store." />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 col-sm-6"><img src="./images/15016414_10209857569467605_5381956399134002401_o.jpg"
                                class="portfolio-img" alt="Cooked food on plates coming down a conveyor" />
                            </div>
                            <div class="col-md-6 col-sm-6"><img src="./images/319994_2281032997001_353546433_n.jpg" class="portfolio-img"
                                alt="Dude holding up rod on one hand and walleyes on the other." />
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
            </section>
            <Footer />
        </>
    );
}

export default Home;