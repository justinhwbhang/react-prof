import AboutMe from "../components/AboutMe"
import ContactMe from "../components/ContactMe"
import Projects from "../components/Projects"
import Resume from "../components/Resume"

export default function Body() {
    return(
        <div className="body-wrapper">
            <AboutMe/>
            <Projects/>
            <Resume/>
            <ContactMe/>
        </div>
    )
}