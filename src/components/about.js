import React from 'react'
import { Card } from 'react-bootstrap';



function About() {
    return (
        <section className="home-about-area pt-120">
            <div className="container">
                <h4 style={{ paddingBottom:'20px'}}>What I Do?</h4>
                <div className="row align-items-center justify-content-between">
                    <Card style={{ width: '33.33%' }} className="card-about">
                        <Card.Body className="service txt-center">
                            <Card.Img className="service__icon" src="img/WebDesign.png"  alt=""></Card.Img>
                            <Card.Subtitle className="mb-2 text-muted">Web Design</Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                         </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '33.33%' }} className="card-about">
                        <Card.Body className="service txt-center">
                            <Card.Img className="service__icon" src="img/WebDevelopment.png" alt=""></Card.Img>
                            <Card.Subtitle className="mb-2 text-muted">Web Development</Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                         </Card.Text>
                        </Card.Body>
                    </Card>
                    {/* <Card style={{ width: '18rem' }} className="card-about">
                        <Card.Body className="service txt-center">
                            <Card.Img className="service__icon" src="img/about-img.png" alt=""></Card.Img>
                            <Card.Subtitle className="mb-2 text-muted">Web Design</Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                         </Card.Text>
                        </Card.Body>
                    </Card> */}
                   
                </div>
            </div>
        </section>



    )
}
export default About