import React, { Component } from "react";

import "./Social.css";

class Social extends Component {
  getClassNames() {
    var result = "";

    if (this.props.title === false) result += " no-title";
    if (this.props.text === false) result += " no-title";

    return result;
  }

  render() {
    return (
      <social className={this.getClassNames()}>
        <div className="_title">Follow us on social media</div>
        <div className="_icons">
          <div>
            <i className="fab fa-facebook facebook" />
            <span>Facebook</span>
          </div>
          <div>
            <i className="fab fa-twitter twitter" />
            <span>Twitter</span>
          </div>
          <div>
            <i className="fab fa-instagram instagram" />
            <span>Instagram</span>
          </div>
          <div>
            <i className="fab fa-youtube youtube" />
            <span>Youtube</span>
          </div>
        </div>
      </social>
    );
  }
}
export default Social;
