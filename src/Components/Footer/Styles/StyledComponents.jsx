import styled from "styled-components";
import {Link} from "react-router-dom";

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledA = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;


export const StyledFooter = styled.nav`
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 20px 0 10px;
    width: 100%;
    transition: bottom 0.5s ease;
    align-items: center ;
    
`