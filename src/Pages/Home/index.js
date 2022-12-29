import React from 'react'
import './styles.css';

export default function Home() {


    return (
      <div className="container">
        <div className="barraMenu">    
          <ul id="textoBarraMenu">
            <li>HOME</li>            
            <li>EXTRATO</li>
            <li>CARTEIRA</li>
            <li>TRANSFERIR</li>
            <li>PERFIL</li>
          </ul>  
        </div>
          <div>
            <button className="butaoEmprestimo">EMPRESTIMO</button><br/>
            <button className="butaoEmprestimo">DOAÇOES</button><br/>
            <button className="butaoEmprestimo">INVESTIR</button>
          </div>          
      </div>
    );
  }

