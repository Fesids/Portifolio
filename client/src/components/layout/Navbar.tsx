import React, { useRef } from "react"
import { TypingTxtAnimation } from "../TypingTextAnimation/typingTextAnimation"
import { EmailIcon } from "../icons/email-icon"
import { NavbarLogo } from "../logo/navbarLogo"
import { SocialBtns } from "../social-btns/SocialBtns."
import { NavbarComponent } from "./style"
import style from "../../../public/css/navbar.module.scss"

interface props extends React.HtmlHTMLAttributes<HTMLDivElement>{
    ref?: HTMLDivElement
}

type Ref = props
export const Navbar = React.forwardRef<HTMLDivElement, Ref>(
    ({...props}:props, ref)=>{


    return(
        <div ref={ref} className={style.navbar}>
            <NavbarLogo/>
            <TypingTxtAnimation/>
           
            <SocialBtns/>
        </div>
        
    )
}
)