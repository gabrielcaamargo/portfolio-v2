import styled from 'styled-components';

export const TabsWrapper = styled.header`
  display: flex;
  justify-content: center;
  margin: 64px 0;
`;

export const Tab = styled.a`
  cursor: pointer;
  font-weight: 700;
  font-size: 28px;

  transition: color .3s linear;

  &:hover{
    color: ${({ theme }) => theme.colors.mainColorSet.lightPink};
  }

  & + & {
    margin-left: 16px;
  }

  @media (max-width: 400px){
    font-size: 24px;
  }
`;
