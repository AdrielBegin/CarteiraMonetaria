import React from 'react'
import coalalogo from "./logocoala.svg"
import './styles.css';
import {Ul, Li,ButtonEmprestimo,ButtonDoacao, ButtonInvestir,Div} from './styles';

export default function Home() {


    return (
      <div className="container">      
            
        <div className="barraMenu">
        <Ul>
          <Li>HOME</Li>            
          <Li>EXTRATO</Li>
          <Li>CARTEIRA</Li>
          <Li>TRANSFERIR</Li>
          <Li>PERFIL</Li>
        </Ul>  
        </div>

        {/* <Div>
          <p>COALA</p>
        </Div> */}

        <div>
          <img src={coalalogo} />
          <div>
            <h1>COALA</h1>
          </div>
        </div>
        
        <div>
          <ButtonEmprestimo>EMPRESTIMO</ButtonEmprestimo>
          <ButtonDoacao>DOAÇÕES</ButtonDoacao>
          <ButtonInvestir>INVESTIR</ButtonInvestir>
        </div>          
      </div>
    );
  }

