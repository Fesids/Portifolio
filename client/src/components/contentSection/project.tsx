import axios from "axios";
import { useEffect, useState } from "react";
import style from "../../../public/css/contentSection.module.scss";
import { IRepository } from "../../models/Repository";
import { useDispatch } from "react-redux";
import { fetchRepositoryByUrl } from "../../store/features/repositories";
import { useAppDispatch } from "../../store/store";

interface projProps{
    url: string;
}

export const Project = ({url}: projProps) =>{

    const [rep, setRep] = useState({} as IRepository);
    const dispatch = useAppDispatch();

    let description = ""

    if(rep.description){
        description = rep.description.slice(0, 50)
    }

    useEffect(()=>{

        dispatch(fetchRepositoryByUrl(url))
        .unwrap()
        .then(resp => setRep(resp));

    }, [url])

    console.log(rep);
    return(
        <div className={style.projectContainer}>
            <div className={style.icons}>
                <div className={style.mark}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmarks" viewBox="0 0 16 16"> <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z"/> <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z"/> </svg>
                    <a href={rep.html_url} target="_blank">{rep.name}</a>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-link" viewBox="0 0 16 16"> <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/> <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"/> </svg>
            </div>
            <div className={style.description}>
                {description}...
            </div>
            <div className={style.language}>
                <div className={style.wrapper}>{rep.language}</div>
            </div>
        </div>

    )

}