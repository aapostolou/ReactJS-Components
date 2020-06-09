import React, { Component } from "react";

import "./Footer.css";

import Social from "./Social/Social";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="_seperator" />
        <div className="_inner">
          <Social />
        </div>
      </footer>
    );
  }
}
export default Footer;
