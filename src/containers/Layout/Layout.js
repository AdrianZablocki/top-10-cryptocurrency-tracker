import React, { Component } from 'react';

import './Layout.css';

class Layout extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <h1 className="app-header">
          Top 10 cryptocurrency tracker
        </h1>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;