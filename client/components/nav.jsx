import React from 'react'

const Nav = (props) => {

    return (
        <div className="navCont">
            <div className="navBar">
                <h1 className="">
                    Mason Keiser
                </h1>
                <div className="rightNav">
                    <div className="">
                        <a href="">About</a>
                        <a href="">Projects</a>
                        <a href="">Skills</a>
                        <a href="">Tools</a>
                        <a href="">Resume</a>
                    </div>
                    <div className="rightNav">
                        <a href="https://github.com/mason-keiser/" 
                            style={{textDecoration: 'none'}}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="decoration-none contact-github pointer mr-2"
                            aria-label="Github">
                            <div className="decoration-none border-div-small d-flex" id='icon'>
                                <i className=" decoration-none fab fa-github text-black  m-auto" />
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/masonkeiser-li"
                            style={{textDecoration: 'none'}}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="decoration-none  contact-linkedin pointer mr-2"
                            aria-label="LinkedIn">
                            <div className="decoration-none border-div-small d-flex" id='icon'>
                                <i className="decoration-none fab fa-linkedin text-black small-font m-auto" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav