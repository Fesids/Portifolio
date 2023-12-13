import React, { useRef } from "react"
import { AboutMe } from "../contentSection/aboutMe"
import { Expirience } from "../contentSection/expiencies"
import { Projects } from "../contentSection/projects"
import { ContentComponent } from "./style"
import {TypeAnimation} from "react-type-animation"

interface props extends React.HtmlHTMLAttributes<HTMLDivElement>{
    ref?: HTMLDivElement
}

type Ref = props
export const Content = React.forwardRef<HTMLDivElement, Ref>(
    ({...props}: props, ref)=>{

        

        return(
            <ContentComponent>
                <AboutMe ref={ref}/>
                <Expirience/>
                <Projects/>
                
            </ContentComponent>
        )

    }
);