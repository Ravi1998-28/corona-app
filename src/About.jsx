import React from "react";
import logo from "../src/image/logo.png"
import flask from "../src/image/flask.jpeg"
const About = () => {
    return(
        <>
            <div className='container-fluid nav_bg'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className="profile">
                            <img className="midlogo my-3" src={logo} alt="profilepic" />
                                <h2>Hey!</h2>
                            <h1><i>I'm Ravi Chauhan</i></h1>
                            <p id="p1">a full stack developer.</p>
                                <p className="p2">I have done my engineering from Poornima institute of Engineering And Technology, lived in
                                    Haryana, India. I am hard working and passionate towards my work.</p>
                        </div>
                        <div className="skills my-3">
                            <h2><i>What I know.</i></h2>
                            <br/>
                        <div>
                            <h3>Front End</h3>
                            <img className="skill_img"
                                 src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
                                 alt="HTML5" />
                                <img className="skill_img"
                                     src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
                                     alt="CSS3" />
                                    <img className="skill_img"
                                         src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                                         alt="javascript" />
                                        <img className="skill_img"
                                             src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
                                             alt="React" />
                        </div>
                            <br/>
                        <div>
                            <h3>Back End</h3>
                            <img className="skill_img"
                                 src={flask}
                                 alt="Flask" />

                        </div>
                            <br/>
                        <div>
                            <h3>Database</h3>
                            <img className="skill_img"
                                 src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png"
                                 alt="MySQL" />
                        </div>
                        </div>
                        <div className="contact-me mt-5">
                            <h2><i>Get In Touch</i></h2>
                            <h3>If you like my work or I can help.</h3>
                            <p className="p2">If you have a project that you want to get started, think you need my help
                                with something or just fancy saying hey, then get in touch.</p>
                            <br/>
                            <a className="btn btn-primary" href="mailto:ravi.chauhan2806@gmail.com">MESSAGE ME</a>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default About;