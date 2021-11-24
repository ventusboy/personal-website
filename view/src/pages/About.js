function Page1 () {
    return(
        <div id="page1" className="page">
            <h1>
                <div>Making Ideas come to life,<br className="hideom" />
                    <span className="indent" id="indent1">one line of code at a time.</span>
                </div>
            </h1>

            <div className="content">
                <p>
                    <span className="indent"></span>Hi! My name is Mikal Young and I'm a software
                    developer based in South Florida with a focus in Android and Web Development.
                    Learning is my passion, and problem solving is my hobby.<br /><br />
                </p>
                <div className="assorted1">
                    <div>
                        <div>
                            <a href="https://www.linkedin.com/in/mikal-young-6772a516a" target="_blank">
                                <img src="/assets/img/linkedin-svg.svg" alt="earth" className="earth" id="earth1" />


                            </a>
                        </div>

                        <div>
                            <a href="https://github.com/ventusboy" target="_blank">
                                <img src="/assets/img/github-svg.svg" alt="earth" className="earth" id="earth2" />

                            </a>
                        </div>


                        <div>
                            <a href="mailto:mikalyoungie@gmail.com.com" target="_blank">
                                <img src="/assets/img/email-svg.svg" alt="earth" className="earth" id="earth3" />

                            </a>
                        </div>

                        <div>
                            <a href="https://www.upwork.com/o/profiles/users/_~01f898c51eb6ad6854/" target="_blank">
                                <img src="/assets/img/upwork-svg.svg" alt="earth" className="earth" id="earth4" />

                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bookholder">
                {/* <div className="desktopbg"></div> */}
                <img src="/assets/img/Component61.svg" id="desktop" alt="Designed by Mikal Young" />
            </div>

            <div id="apage2"></div>
        </div>
    )
}

export default Page1