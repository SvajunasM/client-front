import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  align-items: center;
  background: #baf;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 1rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const Title = styled.h2`
  color: whitesmoke;
  font-weight: 500;
  line-height: 1.2;
`;
export const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const Navigate = styled(Link)`
  @media screen and (max-width: 768px) {
    flex: 1 3rem;
  }
  background: #1fae51;
  border-radius: 0.3rem;
  border: 0;
  color: white;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 1px;
  margin: 0.2rem;
  padding: 0.6rem 2rem;
  text-align: center;
  text-decoration: 0;
  text-transform: uppercase;
  :hover {
    color: white;
    background: brown;
    transition: 0.5s;
  }
`;


