import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto'
  }

  body{
    width: 100%;
    max-width: 800px;
    margin: auto;
    background-color: ${({ theme }) => theme.colors.mainColorSet.background};
    color:  ${({ theme }) => theme.colors.mainColorSet.main};
    display: flex;
    flex-direction: column;
    justify-content: center;
}
`;
