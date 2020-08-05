import React, { Component } from 'react'
import Header from './header'
import Banner from './banner'
import About from './about'
import Expertise from './about-expertise'
import Contact from './contact'
import Resume from './resume'
import Portfolio from './portfolio'
import Footer from './footer'
import { Route } from 'react-router-dom';
import * as constants from '../constants/constant'

class Main extends Component{
    constructor(props) {
        super(props)
        this.state = {
            projects: [],
        }

    }
    componentDidMount() {
        this.setState({
            projects: constants.projects,
        })
    }
    render(){
        return (<div>
            <Route>
            <Header/>
            <Route exact={true} path="/" render={() => (
                <div>
                    <Banner/>
                    <About/>
                    <Expertise/>
                    <Portfolio projects={this.state.projects}/>
                    <Contact/>
                </div>
            )} />
             <Route path = "/about" render = {()=>(
                 <div>
                    <Banner/>
                    <About/>
                    {/* <Expertise/> */}
                 </div>
             )} />
             <Route path="/contact" component={Contact} />
             <Route path="/resume" component={Resume} />
             <Route path="/portfolio" render={() => (
                 <Portfolio projects={this.state.projects}/>
             )} />
               <Footer/>
            </Route>

        </div>
        )
    }
}
export default Main