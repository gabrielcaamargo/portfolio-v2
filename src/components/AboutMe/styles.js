import styled from 'styled-components';

export const AboutWrapper = styled.div`
  margin-top: 80px;

  p{
    margin-top: 12px;
    font-family: 'Inter', sans-serif;
  }

  div{
    color: transparent;
    display: inline;
    background-color: ${({ theme }) => theme.colors.mainColorSet.highlightPink};
    margin-left: 10px;
    height: 2px;
    width: 40px;
  }

`;
