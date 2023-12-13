
import "../../../public/css/typingTxtAnimation.scss";
import { useEffect } from "react";
import {TypeAnimation} from "react-type-animation"



export const TypingTxtAnimation = () =>{


    
    return(
        <div className="word-container">

            <TypeAnimation
                sequence={[
                    'Software Developer',
                    1700,
                    'Software Engineering Student',
                    1900,
                    
                ]}
                wrapper="span"
                speed={20}
                style={{ fontSize: '1em', display: 'flex', justifyContent:'center'}}
                repeat={Infinity}
                />
            </div>
    )
}