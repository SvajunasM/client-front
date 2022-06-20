import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  align-items: center;
  background: grey;
  border-radius: 0.3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 0.5rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0.5rem 0.5rem;
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
  background: #ede;
  border-radius: 0.3rem;
  border: 0;
  color: grey;
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
    background: grey;
    transition: 0.5s;
  }
`;
