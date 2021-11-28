import Project from "./../components/Project"
import React from 'react';
import axios from "axios";

class Projects extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            projects: []
        };
    }

    componentDidMount () {
        // eslint-disable-next-line
        axios.get('http://localhost:5000/portfolio-610be/us-central1/api/getProjects'||'/api/getProjects').
            then(({ data }) => {
                console.log(data)
                let projectsArray = []
                for (const key in data) {
                    projectsArray.push(data[key])
                }
                console.log(projectsArray)
                let projects = projectsArray.map(element => {
                    return <Project key = {element.name} data = {element} />
                });
                this.setState({
                    projects
                })
                console.log(projects)
                // return projectsArray
            }).catch(() => {
                console.log('yeet')
            })
    }

    render () {
        return (
            <div id="page3" className="page">
                <h1>Projects</h1>
                <div className="cardholder">
                    {this.state.projects}
                </div>
            </div>
        )
    }
}

export default Projects