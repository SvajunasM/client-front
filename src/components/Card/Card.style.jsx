import styled from 'styled-components';

export const Card = styled.div`
  background: #eee;
  border-radius: 0.3rem;
  gap: 1rem;
  margin: 1rem 0;
  padding: 1rem;
  min-width: 20rem;
  @media screen and (max-width: 768px) {
    width: 95%;
    overflow: hidden;
    text-align: center;
  }
`;
export const Line = styled.p`
  font-family: 'Gill Sans', 'Gill Sans MT', 'Calibri', 'Trebuchet MS', sans-serif;
  font-size: 1.4rem;
`;
