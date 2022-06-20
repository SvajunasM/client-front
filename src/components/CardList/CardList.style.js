import styled from 'styled-components';

export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
  }
`;
