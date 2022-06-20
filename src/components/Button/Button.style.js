import styled from 'styled-components';

export const Button = styled.button`
  background: ${({ color }) => (color ? color : 'grey')};
  border-radius: 0.3rem;
  border: 0;
  color: white;
  cursor: pointer;
  display: block;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
  margin: 0 auto;
  padding: 0.6rem 3rem;
  text-transform: uppercase;
`;
