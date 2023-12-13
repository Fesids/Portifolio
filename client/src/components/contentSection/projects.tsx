import style from "../../../public/css/contentSection.module.scss";
import { SectionTitle } from "../sectionTitle/sectionTitle";
import { Project } from "./project";


export const Projects = () =>{

    const projectList = [
        "https://api.github.com/repos/Fesids/PYTHON-ECOMMERCE-MICROSERVICE", 
        "https://api.github.com/repos/Fesids/JAVA-ECOMMERCE-MICROSERVICE",
        "https://api.github.com/repos/Fesids/TS-ECOMMERCE-MICROSERVICE",
        "https://api.github.com/repos/Fesids/AUTH-API",
        "https://api.github.com/repos/Fesids/Machine-learning-examples",
        "https://api.github.com/repos/Fesids/django-system",
        "https://api.github.com/repos/Fesids/node-system",
        "https://api.github.com/repos/Fesids/java-system"

    ]

    return(
        <div className={style.projects}>
            <SectionTitle>
                Projetos
            </SectionTitle>
            <div className={style.projectsContainer}>
                {projectList.map(rep => <Project url={rep}/>)}
                
            </div>
        </div>
    )
}