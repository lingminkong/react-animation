import React, { Component } from 'react';

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="row space-between v-center">
          <div className="logo">
            <a href="/">AGENCY.</a>
          </div>
          <div className="nav">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
