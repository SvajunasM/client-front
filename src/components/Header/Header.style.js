import styled from 'styled-components';

export const Header = styled.header`
  background: #eee;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
export const Title = styled.h1``;
export const Links = styled.div``;
export const Link = styled.a`
  background: turquoise;
  margin: 0.2rem;
  border: 0;
  border-radius: 1rem;
  color: grey;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 1px;
  padding: 0.6rem 2rem;
  text-transform: uppercase;
  text-decoration: 0;
  :hover {
    color: white;
    background: red;
    transition: 0.5s;
  }
`;