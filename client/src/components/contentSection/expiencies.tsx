import style from "../../../public/css/contentSection.module.scss";
import { SectionTitle } from "../sectionTitle/sectionTitle";
import { Expiriencee } from "./expirience";


const expiriencesData = [

    {
        jobTitle: "Autônomo",
        startDate: "novembro 2022",
        nowadays: true,
        endDate: "outubro 2022",
        jobDescription: `Atualmente me dedico a construção de softwares pessoais, me inspirando em plataformas E-commerce, sistemas gerenciais e sites diversos da web. Para desempenhar tal tarefa, me apoio nas mais diversas ferramentas e tecnologias modernas.`,
        stack: ['Java', 'Spring', 'Python', 'Django', 'Typescript', 'Javascript', 'Node.Js', 'React', 'Micro Seviços', 'Git', 'Github', 'AWS Services', 'MySQL', 'MongoDB', 'Postgres', 'Docker']
    },



    {
    jobTitle: "Agente Censitário no IBGE",
    startDate: "maio 2022",
    nowadays: false,
    endDate: "outubro 2022",
    jobDescription: `O IBGE é o maior Instituto de Geografia e Estatística público da América Latina, São 27 Unidades em todo o país - nas capitais dos 26 estados e no Distrito Federal, sendo o principal provedor de informações geográficas e estatísticas do Brasil. Atuei no squad de Desenvolvimento e manutenção SIG/SIGC que pertence a comunidade de Cadastro e Gestão de Pessoal e de Setores Censitários (Mapas e Dispositivos Móveis).
    Como Desenvolvedor de Software minhas responsabilidades incluem desenvolvimento de novas features, code review, escrita de testes unitários, resolução de chamados e bugs, monitoramento e deploy da aplicação.`,
    
    stack: ['Java', 'Spring', 'R', 'Python', 'Django', 'Typescript', 'Javascript', 'Node.Js', 'React', 'Micro Seviços', 'Git', 'Github', 'AWS Services', 'MySQL', 'MongoDB']
    }
    
]

export const Expirience = () =>{

    return(
        <div className={style.expiriences}>
            <div className={style.expienceContent}>
                <SectionTitle>
                    Minha Experiência
                </SectionTitle>

                <div className={style.expiriencesContainer}>
                   
                    {expiriencesData.map(exp => <Expiriencee {...exp} key={exp.jobTitle}/>)}
                </div>
            </div>
        </div>
    )
}