import style from "../../../public/css/socialbtns.module.scss"
import { EmailIcon } from "../icons/email-icon"
import { GitHubIcon } from "../icons/github-icon"
import { LinkedInIcon } from "../icons/linkedin-icon"
export const SocialBtns = () =>{

    return(
        <div className={style.socialBtns}>
            <a href="mailto:felipesousa458999@gmail.com" target="_blank">
                <EmailIcon/>
            </a>

            <a href="https://github.com/Fesids" target="_blank">
                <GitHubIcon/>
            </a>

            <a href="https://www.linkedin.com/in/felipe-siqueira-de-sousa-28a5951b5/" target="_blank">
                <LinkedInIcon/>
            </a>
        </div>
    )

}