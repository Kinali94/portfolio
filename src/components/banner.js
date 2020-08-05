import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Banner extends Component {
    render() {
        return (
            <div>
                <section className="banner-area">
                    <div className="container">
                        <div className="row fullscreen align-items-center justify-content-between">
                            <div className="col-lg-6 col-md-6 banner-left">
                                <h1>Kinali Gandhi</h1>
                                <div className="tagline">.Net Web Developer</div><br />
                                <div className="bio mb-4">I'm a software engineer specialised in frontend and backend development
                                for complex scalable web apps.
                                Want to know how I may help your project? Check out my project &nbsp;
                                  <Link className="link-on-bg" to="/portfolio">portfolio </Link>
                                 and <Link className="link-on-bg" to="/resume">online resume</Link>.
				        		</div>
                                <Link className="primary-btn text-uppercase" to="/files/Resume.docx" target="_blank" download>Download Resume</Link>
                            </div>
                            <div className="col-lg-6 col-md-6 banner-right d-flex align-self-end">
                                <img className="img-fluid" src="img/cover-pic.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
