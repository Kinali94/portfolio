import React, { Component } from 'react'
import ResumeContent from './resume-content'
import * as constants from '../constants/constant'

class Resume extends Component {
    constructor() {
        super()
        this.state = {
            skills: [],
            education_experiences:[],
            // projects:[],
        }

    }
    componentDidMount() {
        // const data = this.StimulateDatafromDatabase()
        this.setState({
            skills: constants.skills,
            education_experiences:constants.education_experiences,
        })
    }
    render() {
        return (
            <div>
                <ResumeContent skills={this.state.skills} education_experiences={this.state.education_experiences}/>
            </div>
        )
    }
}
export default Resume
