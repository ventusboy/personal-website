import Project from "./components/Project"
function Projects (props) {
    let project1 = {
        link: "https://github.com/Bonfire/OptiGrader",
        name: "Opti-Grader",
        description: "Opti-Grader is an Android Application that uses OpenCV, a Computer Vision Library, to scan a scantron using the clients phone and automatically upload and grade the answers. An online gradebook is available on the Opti-Grader website for both the test takers and creators."
    }
    let projectsArray = [project1]
    const projectList = projectsArray.map(element => {
        return <Project data = {element} />
    });
    console.log(projectsArray)
    return (
        <div id="page3" className="page">
            <h1>Projects</h1>
            <div className="cardholder">
                {projectList}
            </div>
        </div>
    )
}

export default Projects