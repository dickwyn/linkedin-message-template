import React, { Component } from 'react';
import '../../styles/header.scss';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="left">www.dickwyn.xyz</div>
        <div className="right">right</div>
      </div>
    );
  }
}

export default Header;
