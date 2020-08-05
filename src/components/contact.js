import React, { Component } from 'react';
import fire from '../database/config.js'
import { withRouter } from 'react-router-dom';  

export class Contact extends Component {

    addMessage(e) {
        e.preventDefault() // <- prevent form submit from reloading the page
        /* Send the message to Firebase */

        const db = fire.firestore();

        var userInfo = {
            name: e.target.elements.name.value,
            email: e.target.elements.email.value,
            subject: e.target.elements.subject.value,
            message: e.target.elements.message.value
        }; //user info

        db.collection('contacts').add(userInfo)
            .then(() => alert('Thank you for reaching out to me, I will contact you soon!', ''))
            
        // fire.database().ref('contacts').push(userInfo);

        e.target.elements.name.value = ''; // <- clear the input
        e.target.elements.email.value = '';
        e.target.elements.subject.value = '';
        e.target.elements.message.value = '';

    }


    render() {
 
        return (
            <div>
                <section className="relative about-banner">
                    <div className="overlay overlay-bg " />
                    <div className="container">
                        <div className="row d-flex align-items-center justify-content-center">
                            {/* <div className=  "about-content col-lg-12 individual-class" > */}
                                <div className={this.props.location.pathname !== "/contact" ? "about-content col-lg-12" : "about-content col-lg-12 individual-class"}>
                                <h1 className="">
                                    Contact
                             </h1>
                                {/* <p className="text-white link-nav"><a href="index.html">Home </a>  <span className="lnr lnr-arrow-right" />  <a href="contact.html"> Contact Us</a></p> */}
                            </div>
                        </div>
                    </div>
                </section>
                {/* End banner Area */}
                {/* Start contact-page Area */}
                <section className="contact-page-area section-gap">
                    <div className="container padding-cls">
                        <h5 className="contact-h5">Get in Touch</h5>
                        <div className="row">
                            <div className="col-lg-4 d-flex flex-column address-wrap">
                                <div className="single-contact-address d-flex flex-row">
                                    <div className="icon">
                                        <span className="lnr lnr-home" />
                                    </div>
                                    <div className="contact-details">
                                        <h5>Bangalore, India</h5>
                                    </div>
                                </div>
                                <div className="single-contact-address d-flex flex-row">
                                    <div className="icon">
                                        <span className="lnr lnr-envelope" />
                                    </div>
                                    <div className="contact-details">
                                        <h5>gandhikinali019@gmail.com</h5>
                                        <p>Send us your query anytime!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <form className="form-area contact-form text-right" onSubmit={this.addMessage.bind(this)}>
                                    <div className="row">
                                        <div className="col-lg-6 form-group">

                                            <input type="text"
                                                name="name"
                                                placeholder="Enter your name"
                                                className="common-input mb-20 form-control" required />

                                            <input type="email"
                                                name="email"
                                                placeholder="Enter email address"
                                                pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                                                className="common-input mb-20 form-control" required />

                                            <input type="text"
                                                name="subject"
                                                placeholder="Enter subject"
                                                className="common-input mb-20 form-control" required />

                                        </div>
                                        <textarea className="common-textarea form-control"
                                            name="message"
                                            placeholder="Enter Messege"
                                            className="common-textarea form-control" required />

                                        <div className="col-lg-12" style={{ paddingRight: '0px', paddingTop: '20px' }}>
                                            <div className="alert-msg" style={{ textAlign: 'left' }} />
                                            <button type="submit" className="genric-btn primary" style={{ float: 'right' }}>Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        )
    }
}

export default withRouter(Contact) 
