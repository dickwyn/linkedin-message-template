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
          <a href="https://blog.dickwyn.xyz/">Blog</a>
          <a href="https://www.dropbox.com/s/l4e85oz3jflg9fl/resume-dick-wyn-yong.pdf?dl=0">
            Resume
          </a>
          <a href="mailto:dickwyn@outlook.com">Contact</a>
        </div>
      </div>
    );
  }
}

export default Header;
