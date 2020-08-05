import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import loadjs from 'loadjs';

export class Portfolio extends Component {
    
    componentDidMount() {
        loadjs('./js/main.js', () => { });
        // this.setState({
        //     skills: constants.skills,
        //     education_experiences:constants.education_experiences,
        // })
    }
    render() {
        return (
            <div>
                <section className="testimonial-area section-gap">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="menu-content pb-70 col-lg-8" style={{paddingBottom:"20px"}}>
                                <div className="title text-center">
                                    <h1 className="mb-10 heading">Featured Projects</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className={this.props.location.pathname != "/portfolio" ? "active-testimonial pClass" : "profolioCls pClass"}>
                                {this.props.projects
                                    .map((project, index) =>
                                        <div className="single-testimonial item d-flex flex-row" key={index}>
                                            <div className="desc">
                                                <h5>{project.title}</h5>
                                                <p>
                                                    {project.description}
                                                </p>
                                            </div>
                                            {project.tags
                                                .map((tag, index) =>
                                            <a key={index} className="genric-btn primary-border circle">{tag}</a>
                                     )} 
                                        </div>
                                    )}
                                {/* <div className="single-testimonial item d-flex flex-row">
                                    <div className="desc">
                                    <h4>Diagnostic Portal</h4>
                                        <p>
                                            A purpose is the eternal condition for success. Every former smoker can tell you just how hard it is to stop smoking cigarettes. However.
                                        </p>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default withRouter(Portfolio);

// export default Portfolio
