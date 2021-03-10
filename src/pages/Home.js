import React from "react";
import "../image.json";
import "./Portfolio.css";
import image1 from "../Images/fongvangpic.jpg";
import image2 from "../Images/12957646_10208106303847059_5781334766809125067_o.jpg";
import image3 from "../Images/14976477_10209856889770613_4681618712186986534_o.jpg";
import image4 from "../Images/14991364_10209857016853790_4196552330444468827_o.jpg";
import image5 from "../Images/15002500_10209856891090646_4831971174106407515_o.jpg";
import image6 from "../Images/15016414_10209857569467605_5381956399134002401_o.jpg";
import image7 from "../Images/319994_2281032997001_353546433_n.jpg";
// import image8 from "../Images/";

const style = {
    p: {
        padding: "20px",
    }
}

function Home() {
    return (
        <>
            <h2><b>About Me</b></h2>
            <hr/>
            <section className="container">
                <div className="row">
                    <div className="col-md-12">
                        <article>
                            <div>
                                <img src={image1} alt="Dude standing with hands behind his back" />
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
            <section className="container">
                <div className="row col-md-12 card card-body">
                    <h2><b>More about me</b></h2>
                </div>
                <hr/>
                <div className="card">
                    <br/>
                    <p style={style.p}>
                        Hello! The few following pictures in the following order left to right, top to bottom were from a few years
                        ago. Very briefly, <span>(1)</span>first photo consists of me and
                        a few of my good friends that we met from high school. This picture was taken at Chicago's Willis Tower
                        observation deck. <span>(2)</span>Second photo is just my friends
                        posing for fun as if they were in a business setting. This picture was taken at a hotel at Bangkok, Thailand.
                        <span>(3)</span>A temple that is inaccessible in the middle of a large pond
                        in Thailand. <span>(4)</span>A luxurious watch that I took a photo of from an
                        expensive store somewhere in Thailand. <span>(5)</span>A few of my friends and I
                        wanted to experience a new
                        way of eating so we went into a restaurant inside a mall in Thailand called MBK Center. All you can eat
                        hotpot-style while sitting next to the conveyor of food on a plate
                        prepped by chefs at the back. <span>(6)</span>Fishing is a part of me so here I am
                        posing with some walleyes that I caught at St. Cloud awhile back!
                    </p>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-6"><img src={image2}
                                className="portfolio-img" alt="Group of friends at Chicago's Willis Tower observation deck taking selfie." />
                            </div>
                            <div className="col-md-6 col-sm-6"><img src={image3}
                                className="portfolio-img" alt="Two guys exchanging notes and info at a hotel." />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-sm-6"><img src={image4}
                                className="portfolio-img" alt="Thai temple in the middle of a pond inaccessible to public" />
                            </div>
                            <div className="col-md-6 col-sm-6"><img src={image5}
                                    className="portfolio-img" alt="Luxurious watch inside glass box in a store." />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-sm-6"><img src={image6}
                                className="portfolio-img" alt="Cooked food on plates coming down a conveyor" />
                            </div>
                            <div className="col-md-6 col-sm-6"><img src={image7} className="portfolio-img"
                                alt="Dude holding up rod on one hand and walleyes on the other." />
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
            </section>
        </>
    );
}

export default Home;