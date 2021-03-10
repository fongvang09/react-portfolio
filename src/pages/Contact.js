import React from "react";

function Contact() {
    return (
        <>
            <br/>
            <div className="container">
                <h2><b>Contact</b></h2>
            </div>
            <hr/>
            <section className="container">
                <form>
                <div className="form-group">
                    <label>Name</label>
                    <input type="email" className="form-control" placeholder="Name" />
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Email" />
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <textarea className="form-control" rows="3" placeholder="Message" />
                </div>
                </form>
                <div className="col-auto my-1">
                <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </section>
            <hr/>
            <div className="container text">
                <h2>Updated Contact</h2>
                <br/>
                <p>Hello! I want to thank you first and foremost for spending your valuable time to visit my Contact page. If
                there's any questions, comments or concerns,
                please don't hesitate to message me! I can also be reached at 651-442-2905 for a more immediate response. My personal email is <a href="mailto: koichi_vang@hotmail.com">koichi_vang@hotmail.com</a> if you prefer email contact.
                </p>
                <p>Have a wonderful day!</p>
            </div>
        </>
    );
}

export default Contact;