import axios from "axios"
import style from "../../public/css/index.module.scss"
import { ArrowSection } from "../components/arrowSection/arrowSection"
import { Bottom } from "../components/layout/Bottom"
import { Content } from "../components/layout/Content"
import { Navbar } from "../components/layout/Navbar"
import { useRef, useState } from "react"

export const Index = () =>{

    const reference = useRef<HTMLDivElement>(null);

    const navReference = useRef<HTMLDivElement>(null);

   

    const handleScroll = () =>{
        reference.current?.scrollIntoView({behavior: "smooth"});
    }

    const handleGoToTheTop = () =>{
        navReference.current?.scrollIntoView({behavior: "smooth"});
    }

    return(
        <div className={style.indexPage}>
            <Navbar ref={navReference}/>
            <ArrowSection onClick={handleScroll}/>
            <Content ref={reference}/>
            <Bottom onClick={handleGoToTheTop}/>
        </div>
    )
}