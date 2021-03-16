import { createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  :root{
    --color-orange:  #FF9A00;
  }
    .rodape{
        background: var(--color-orange);
        border:0;
        height: 15vh;
        line-height: 15vh;
        color: white;
        font-size: 12px;
        margin-top: 30px;
        text-align: center;
        }
`;
