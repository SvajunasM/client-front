import styled from 'styled-components';

export const CardList = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
  }
`;
