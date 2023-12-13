import { useEffect, useRef } from "react";
import { BottomComponent } from "./style"

interface BottomProps{
    onClick: () => void
}
export const Bottom = ({onClick}:BottomProps) =>{

    
    const ref = useRef<HTMLDivElement>({} as any);

    var myScrollFunc = function() {
        var y = window.scrollY;

        if(ref)
        if (y >= 400) {
            ref.current.className = "show"
            
        } else {
            ref.current.className = "hide"
        }
        };

    
    useEffect(()=>{
        window.addEventListener("scroll", myScrollFunc);
    }, [])

    return(
        <BottomComponent>
            <div className="hide" ref={ref}>
                <svg onClick={()=> onClick()} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" color="#F5F5EF" height="2rem" width="2rem" xmlns="http://www.w3.org/2000/svg" style={{color: "rgb(245, 245, 239)"}}><path d="M6 4h12v2H6zm.707 11.707L11 11.414V20h2v-8.586l4.293 4.293 1.414-1.414L12 7.586l-6.707 6.707z"></path></svg>
            </div>
        </BottomComponent>
    )
}