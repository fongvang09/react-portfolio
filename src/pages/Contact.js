import React from "react";
// import Header from "../components/Header";

function Contact() {
    return (
        <>
            <br/>
            <div class="container">
                <h2><b>Contact</b></h2>
            </div>
            <hr/>
            <section class="container">
                <form>
                <div class="form-group">
                    <label>Name</label>
                    <input type="email" class="form-control" placeholder="Name" />
                </div>
                <div class="form-group">
                    <label>Email address</label>
                    <input type="email" class="form-control" placeholder="Email" />
                </div>
                <div class="form-group">
                    <label>Message</label>
                    <textarea class="form-control" rows="3" placeholder="Message" />
                </div>
                </form>
                <div class="col-auto my-1">
                <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </section>
            <hr/>
            <div class="container text">
                <h2>Updated Contact</h2>
                <br/>
                <p>Hello! I want to thank you first and foremost for spending your valuable time to visit my Contact page. If
                there's any questions, comments or concerns,
                please don't hesitate to message me! I can also be reached at 
                {/* <span style="color: yellow"> */}
                    651-442-2905
                    {/* </span> */}
                for a more immediate response. My personal email is <a href="mailto: koichi_vang@hotmail.com">koichi_vang@hotmail.com</a> if you prefer email contact.
                </p>
                <p>Have a wonderful day!</p>
            </div>
        </>
    );
}

export default Contact;