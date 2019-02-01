import React, { Component } from 'react';
import '../../styles/header.scss';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="left">
          <a href="https://www.dickwyn.xyz/">dickwyn.xyz</a>
        </div>
        <div className="right">
          <a href="#">Link1</a>
          <a href="#">Link2</a>
          <a href="#">Link3</a>
        </div>
      </div>
    );
  }
}

export default Header;
