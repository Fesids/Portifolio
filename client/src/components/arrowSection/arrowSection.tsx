import { useRef } from "react";
import style from "../../../public/css/arrow.module.scss";
import React from "react";

interface props{
    onClick: () => void
}



export const ArrowSection = ({onClick}:props) =>{
        


    return(
        <div className={style.arrowSection} >
            
            <svg onClick={()=> onClick()}  className={style.arrowBottom} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M43.9583 30.9896L26.4583 48.5417C26.25 48.75 26.0243 48.8972 25.7812 48.9833C25.5382 49.0708 25.2777 49.1146 25 49.1146C24.7222 49.1146 24.4618 49.0708 24.2187 48.9833C23.9757 48.8972 23.75 48.75 23.5416 48.5417L5.98954 30.9896C5.50343 30.5035 5.26038 29.8958 5.26038 29.1667C5.26038 28.4375 5.52079 27.8125 6.04163 27.2917C6.56246 26.7708 7.1701 26.5104 7.86454 26.5104C8.55899 26.5104 9.16663 26.7708 9.68746 27.2917L25 42.6042L40.3125 27.2917C40.7986 26.8056 41.3972 26.5625 42.1083 26.5625C42.8208 26.5625 43.4375 26.8229 43.9583 27.3438C44.4791 27.8646 44.7395 28.4722 44.7395 29.1667C44.7395 29.8611 44.4791 30.4688 43.9583 30.9896Z" fill="white" fillOpacity="0.6"></path></svg>
           
        </div>
    )
}


