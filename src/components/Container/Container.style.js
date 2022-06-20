import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5rem 0;
  @media screen and (max-width: 768px) {
    padding: 1rem 0;
  }
`;
