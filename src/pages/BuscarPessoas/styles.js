import { createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
   :root{
      --color-background: #F2F3F5;
      --color-orange:  #FF9A00;
      --color-purple: #8257E5;
    }
      .forms{
        margin: 0 auto;
        background-color: white;
        height: 220px;
        border-bottom: 10px solid #FF9A00;
     
      }
      form{
        max-width: 800px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 1rem;
        justify-content: center;
        text-align: center;
        padding-top: 35px;
        color: black;
    
      }

      form select{
        height: 33px;
        border: 1px solid #C1BCCC;
        box-sizing: border-box;
        border-radius: 4px;
        display: grid;
        width:100%;
     
      
      }
      form label{
        color: var(--color-purple);
        font-weight:bold;
        display: grid;
        text-align:left;
        padding-bottom:2px;
      }
   
     /*===== BUSCAR PESSOAS ======*/
      .btn-buscarPessoas{
        background-color: #8257E5;
        border-radius: 4px;
        border: 0;
        cursor: pointer;
        font: 700 1rem Archico;
        color: #FFFFFF;
        transition: 0.2s;
        margin-top:17px;
        
      
      .btn-buscarPessoas:hover{
        background-color: #8117E1;
      }



  
`;
