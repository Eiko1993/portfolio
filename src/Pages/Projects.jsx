import "../Assets/CSS/main.css";
import Project from "../Components/Project";
import Banner from "../Components/Banner";
import background from "../Assets/Images/banner_projets.jpeg";

function Projects(){
    return(
        <div className="projects">
            <Banner img={background} title="Mes Projets"/>
            <Project />
        </div>
    )
}

export default Projects;

