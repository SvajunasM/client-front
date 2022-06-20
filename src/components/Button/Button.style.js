import styled from 'styled-components';

export const Button = styled.button`
  background: ${({ color }) => (color ? color : 'grey')};
  border: 0;
  color: white;
  cursor: pointer;
  display: block;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 1px;
  margin: 0 auto;
  padding: 0.6rem 2rem;
  text-transform: uppercase;
`;
