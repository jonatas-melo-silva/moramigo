import { createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    :root{
      --color-background: #F2F3F5;
      --color-orange:  #FF9A00;
    }
    
/*===== CARDS ======*/

.cards{
    max-width: 800px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2px;

  
}

.card{
    background-color: var(--color-roxo);
    display: grid;
    cursor: pointer;
    border: 1px solid gray;
    margin-top: 20px;
    height:200px;
    width:250px;
    border-radius:4px;

}

  
`;
