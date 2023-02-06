import { useState } from "react";
import { projects, featuredProject, topFour } from '../data'
import ProjectModal from "./ProjectModal";

function Projects2() {
    const [openModal, setOpenModal] = useState(false)

    const modalToggle = () => {
        openModal == false ?
        setOpenModal(true):
        setOpenModal(false)
    }


    return (
        <div id="projects" className="section box">

            <h2 className="section-title box ">Projects</h2>

            <div className="projectCards_container_all" >

                <div id={'projectCard_' + featuredProject.projId} className='projectCard productCard_featured '>
                    <img className="projectCard-image " src={featuredProject.image} alt={'Image for Clayton Miller project ' + featuredProject.projName} />
                    <div className="projectCard-fadeElement" ></div>
                    <div className="projectCard-content">
                        <div className="projectLinks">
                            <a className=" projectLinks-el projectCard-link colorMain " href={featuredProject.liveLink} target="_blank">Live Page</a>
                            <p className=' projectLinks-el projectCard-description ' >{featuredProject.description}</p>
                            <a className=" projectLinks-el projectCard-link colorMain " href={featuredProject.projLink} target="_blank">Repository</a>
                        </div>
                    </div>
                </div>

                <div className="projectCards_container_misc ">
                { projects.map( project => 

                    <div id={'projectCard_' + project.projId} className='projectCard'>
                        <img className="projectCard-image " src={project.image} alt={'Image for Clayton Miller project ' + project.projName} />
                        <div className="projectCard-fadeElement" ></div>
                        <div className="projectCard-content">
                            <div className="projectLinks" >

                                <a className=" projectLinks-el projectCard-link colorMain " href={project.liveLink} target="_blank">Live Page</a>
                                <p className=' projectLinks-el projectCard-description box ' >{project.description}</p>
                                <a className=" projectLinks-el projectCard-link colorMain " href={project.projLink} target="_blank">Repository</a>
                            </div>
                        </div>
                    </div>
                    
                )}
                </div>

            </div>

        </div>
    )
}
export default function Projects() {
    const [openModal, setOpenModal] = useState(false)

    const modalToggle = () => {
        openModal == false ?
        setOpenModal(true):
        setOpenModal(false)
    }


    return (
        <div id="projects" className="section box">

            <h2 className="section-title box ">Check out some of my latest projects!</h2>

            <div className="projectCards_container_all ">
            { topFour.map( project => 
                // <div id={'projectCard_' + project.projId} className='projectCard'>
                //     <img className="projectCard-image " src={project.image} alt={'Image for Clayton Miller project ' + project.projName} />
                //     <div className="projectCard-fadeElement" ></div>
                //     <div className="projectCard-content">
                //         <div className="projectLinks">
                //             <a className="projectLinks-el projectCard-link colorMain " href={project.liveLink} target="_blank">Live Page</a>
                //             <p className='projectLinks-el projectCard-description box ' >{project.description}</p>
                //             <a className="projectLinks-el projectCard-link colorMain " href={project.projLink} target="_blank">Repository</a>
                //         </div>
                //     </div>
                // </div>
                <div id={'projectCard_' + project.projId} className='projectCard'>
                    <img className="projectCard-image " src={project.image} alt={'Image for Clayton Miller project ' + project.projName} />
                    <div className="projectCard-fadeElement" ></div>
                    <div className="projectCard-content">
                        <div className="projectLinks">
                            <p className='projectLinks-el projectCard-description box ' >{project.description}</p>
                            <a className="projectLinks-el projectCard-link colorMain box box-shadow" href={project.liveLink} target="_blank">Live Page</a>
                            {/* <a className="projectLinks-el projectCard-link colorMain " href={project.projLink} target="_blank">Repository</a> */}
                        </div>
                    </div>
                </div>
            )}
            </div>

        </div>
    )
}