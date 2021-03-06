import React, {Component} from 'react';
import Router, {Link} from 'react-router';


export default class Header extends Component {
  render() {
    return (
        <div className="row">
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <Link className="navbar-brand" to="/">Sustainable Fish</Link>
              </div>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                  <li><Link className="navbar-brand" to="about">About Us</Link></li>
                </ul>
              </div>
            </div>
          </nav>
       </div>
    );
  }
};
