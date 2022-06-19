import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  background: #435d7d;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const Title = styled.h2`
  font-weight: 500;
  color: whitesmoke;
  line-height: 1.2;
`;
export const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const Navigate = styled(Link)`
  @media screen and (max-width: 768px) {
    flex: 1 5rem;
  }
  background: pink;
  margin: 0.2rem;
  border: 0;
  border-radius: 1rem;
  color: black;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 1px;
  padding: 0.6rem 2rem;
  text-transform: uppercase;
  text-decoration: 0;
  :hover {
    color: white;
    background: brown;
    transition: 0.5s;
  }
`;


