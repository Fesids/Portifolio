import styled from "styled-components";

export const NavbarComponent = styled.div`

    background-color: black;
    width: 100%;
    display: flex;
    justify-content: center;
    //grid-template-column: 1fr 1fr;
    align-items: center;
    flex-direction: column;
    grid-area: "navbar";

    @media (max-width: 1196px){
        grid-row: 1;
    }
    
    @media (max-width: 870px) {
        //background-color: red;
         grid-row: 1;
      }

    @media (max-width: 700px) {
       //background-color: red;
        grid-row: 1;
     }


`

export const ContentComponent = styled.div`

    background-color: red;
    width: 100%;
    display: grid;
    grid-template-rows: 1.7fr 4fr 2fr;
    grid-area: "content";


    @media (max-width: 1196px){
        grid-row: 3/span 4;
    }


    @media (max-width: 870px) {
        //background-color: red;
         grid-row: 3/span 4;
      }

    @media (max-width: 700px) {
        //background-color: red;
         grid-row: 3 / span 4;
         grid-template-rows: 1.7fr 7fr 2fr;
      }
 

`

export const BottomComponent = styled.div`

    background-color: black;
    width: 100%;
    grid-area: "bottom"
    position: relative;
    display: flex;
    z-index:1;

    .hide{
        opacity: 0;
        z-index: 0;
        left: -100%;
        bottom: -100%;
        svg{
            opacity: 0;
            background: none;
            color: none;
        }
    }

    .show{
        opacity: 1;
        position: fixed;
        z-index: 56;
        bottom: 25px;
        right: 10px;
        background-color: black;
        
        border-radius: 90px;
    }

    #arr{
        
       
    }

    @media (max-width: 700px) {
       
        grid-row: 1 / span 2;
      }
 

`