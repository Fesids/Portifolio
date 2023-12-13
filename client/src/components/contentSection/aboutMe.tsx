import { useRef } from "react";
import style from "../../../public/css/contentSection.module.scss";
import React from "react";

interface props extends React.HtmlHTMLAttributes<HTMLDivElement>{
    ref: HTMLDivElement
}

type Ref = props

export const divRef = {current: null}

export const AboutMe = React.forwardRef<HTMLDivElement, Ref>(
    ({...props}, ref) =>{


    return(
        <div className={style.aboutMe} id={style.aboutMe} ref={ref}>
            <section>
                <h2 >Olá! Eu sou o Felipe </h2>
                <p>
                    Apaixonado pelo desenvolvimento de aplicações desde os 20 anos, brasileiro e nascido em 2002. Sou estudante de Engenharia de Software na Universidade Cidade de São Paulo e atualmente me dedico a criação de projetos pessoais. Sou uma pessoa que adora desafios, assim como todo desenvolvedor, mas em especial aqueles que me tiram da minha zona de conforto, pois as minhas maiores evoluções e aprendizados vierem de momentos em que me vi obrigado a sair e encontrar novas perspectivas de vida. Estudante assíduo, que aprecia adquirir novos conhecimentos de forma constante. Sou um apreciador de cinema 🎥, esportes de combate 🥊🤼 🥋 e de musculação 💪💪
                </p>
            </section>
            
        </div>
    )

}

)













/*export const AboutMe = ({ref}: props) =>{

    const abrRef = useRef(ref)

    return(
        <div className={style.aboutMe} id={style.aboutMe}>
            <section>
                <h2>Olá! Eu sou o Felipe </h2>
                <p>
                    Apaixonado pelo desenvolvimento de aplicações desde os 20 anos, brasileiro e nascido em 2002. Sou estudante de Engenharia de Software na Universidade Cidade de São Paulo e atualmente me dedico a criação de projetos pessoais. Sou uma pessoa que adora desafios, assim como todo desenvolvedor, mas em especial aqueles que me tiram da minha zona de conforto, pois as minhas maiores evoluções e aprendizados vierem de momentos em que me vi obrigado a sair e encontrar novas perspectivas de vida. Estudante assíduo, que aprecia adquirir novos conhecimentos de forma constante. Sou um apreciador de cinema 🎥, esportes de combate 🥊🤼 🥋 e de musculação 💪💪
                </p>
            </section>
            
        </div>
    )
}*/