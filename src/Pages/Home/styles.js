import styled from "styled-components";
import coalalogo from "./logocoala.svg"

export const Ul = styled.ul`
    list-style: none;
    padding: 9px;
    text-align:center;    
    `;
export const Div = styled.div`
    background-image: url(${coalalogo});
    background-size: cover;
    background-repeat: no-repeat;
    background-position:center;
    width: auto;
    height: "750%";

`;    

export const Li = styled.li`
   display: inline;
   color: #FFFFFF;
   padding: 60px;    
`;
export const ButtonEmprestimo = styled.button`           
  position: relative;
  background: rgba(36, 35, 35, 0.9);
  color: white;  
  font-size: 40px;
  margin: 1em;
  padding: 10px;  
  border-radius: 11px;        
`;
export const ButtonDoacao = styled(ButtonEmprestimo)`
          
`;
export const ButtonInvestir = styled(ButtonEmprestimo)`
        
`;
