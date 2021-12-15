import axios from "axios";
import React from "react";

class About extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            languages: [],
            tools: []
        }
    }
    async componentDidMount () {
        let { data } = await axios.get('http://localhost:5000/portfolio-610be/us-central1/api/getAbout')
        console.log(data)
        let languages = data.languages.sort((a, b) => {
            return b.length - a.length
        })
        languages = languages.map((language) => {
            return (
                <li key = {language}>
                    {language}
                </li>
            )
        })
        this.setState({ languages })
        let tools = data.tools.sort((a, b) => {
            return b.length - a.length
        })
        tools = data.tools.map((tool) => {
            return (
                <li key = {tool}>
                    {tool}
                </li>
            )
        })
        this.setState({ tools })
    }
    render (){
        return (
            <div id="page2" className="page">
                <h1>About Me</h1>
                <div className="assorted">
                    <div>
                        <h2>Languages Spoken</h2>
                        <br />
                        <ul>
                            {this.state.languages}
                        </ul>
                    </div>
                    <div>
                        <h2>Tools I Use</h2>
                        <br />
                        <ul>
                            {this.state.tools}
                        </ul>
                    </div>

                </div>
                <div className="contain">
                    <p className="">
                        My developer story starts at the at the University Of Central Florida
                        where I took my first programming class. For the first time ever I was
                        enjoying solving academic problems and learning skills that I could use
                        in my daily life, and the rest was history.<br /><br />
                    </p>
                    <p>
                        I pride myself in my ability to go above and beyond
                        for tasks given to me and my attention to detail. Every second spent developing is an
                        opportunity
                        for me to learn something new that I can carry into the future, into other languages, and into
                        my life.
                    </p>
                </div>
                <div className="tri"></div>
                <div className="apage" id="apage3"></div>
            </div>
        )
    }
}

export default About