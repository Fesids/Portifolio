import style from "../../../public/css/contentSection.module.scss"

interface expProps{
    jobTitle: string,
    startDate: string,
    nowadays: Boolean,
    endDate: string,
    jobDescription: string,
    stack: Array<string>

}

export const Expiriencee = ({jobTitle, startDate, nowadays, endDate, jobDescription, stack}: expProps) =>{

    const tec = stack.join(", ")
    return(
        <div className={style.expirienceContainer}>
            <h3 className={style.jobTitle}>{jobTitle}</h3>
            <p className={style.jobTime}>{startDate} - {nowadays?"Hoje": endDate}</p>
            <div className={nowadays? style.actualJobDescription: style.pastJobDescription}>
                <p>{jobDescription}</p>
                <br/>
                <br/>
                <b>Tecnologias: </b>
                {tec}.
            </div>
        </div>
    )

}