import Project from "./../components/Project"
import React from 'react';

class Projects extends React.Component () {
    render () {
        let project1 = {
            link: "https://github.com/Bonfire/OptiGrader",
            name: "Opti-Grader",
            description: "Opti-Grader is an Android Application that uses OpenCV, a Computer Vision Library, to scan a scantron using the clients phone and automatically upload and grade the answers. An online gradebook is available on the Opti-Grader website for both the test takers and creators."
        }

        let projects = fetch('/getProjects').
            then((data)=>{
                let projectsArray = []
                for (const key in data) {
                    projectsArray.push(data[key])
                }
                return projectsArray
            })

        projects = projects.map(element => {
            return <Project data = {element} />
        });

        console.log(projects)
        
        return (
            <div id="page3" className="page">
                <h1>Projects</h1>
                <div className="cardholder">
                    {projects}
                </div>
            </div>
        )
    }
}

export default Projects