import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';
import styled from 'styled-components';

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="./images/carsellbuylogo.jfif" alt="logo" className='logo'/>
      </NavLink>
      <Nav />
    </MainHeader>

  )
  
}

const MainHeader = styled.header`
padding: 0 4.8rem;
height: 10rem;
background-color: ${({ theme }) => theme.colors.bg};
display: flex;
justify-content: space-between;
align-items: center;

.logo{
  height: 5rem;
}
`;

export default Header;