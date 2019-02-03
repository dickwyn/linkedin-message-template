import React, { Component } from 'react';
import '../../styles/footer.scss';

class Footer extends Component {
  render() {
    const year = new Date().getFullYear();

    return (
      <div className="footer">
        <div className="text">© {year} testorange - message template v0.2</div>
      </div>
    );
  }
}

export default Footer;
