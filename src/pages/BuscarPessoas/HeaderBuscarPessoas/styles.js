import { createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    :root{
      --color-background: #F2F3F5;
      --color-orange:  #FF9A00;
    }
    .menu{
     background-color: var(--color-backgroud);
     height: 71px;
     border-bottom: 10px solid var(--color-orange);
    }
    h1{
      color: #8257E5;
      padding-top: 20px;
      padding-left: 8px;
      
    }
`;
