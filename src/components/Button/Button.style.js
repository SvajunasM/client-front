import styled from 'styled-components';

export const Button = styled.button`
  background: ${({ color }) => (color ? color : 'grey')};
  border-radius: 0.3rem;
  border: 0;
  color: white;
  cursor: pointer;
  display: block;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 1px;
  margin: 0 auto;
  margin-bottom: 0.5rem;
  padding: 0.6rem 3rem;
  text-transform: uppercase;
`;
