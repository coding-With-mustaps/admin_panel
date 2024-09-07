import React, { useContext } from 'react';
import { HeaderStyle } from "./Header.style";
import Navigation from './Navigation/Navigation';
import { ThemeContext } from '../../Context/ThemeContext';

const Header = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <HeaderStyle variate={theme}>
        <Navigation />
    </HeaderStyle>
  )
}

export default React.memo(Header);
