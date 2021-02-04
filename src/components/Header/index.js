import React from 'react';
import { Image } from 'semantic-ui-react';
import logo from './logo-github.png';

const Header = () => (
  <header className="header">
    <Image src={logo} size="medium" centered />
  </header>
);

export default Header;
