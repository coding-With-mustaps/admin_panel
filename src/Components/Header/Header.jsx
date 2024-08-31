import React from 'react';
import { HeaderStyle } from "./Header.style";
import Navigation from './Navigation/Navigation';

const Header = () => {
  return (
    <HeaderStyle>
        <Navigation />
    </HeaderStyle>
  )
}

export default React.memo(Header);
