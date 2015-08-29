import React, {Component} from 'react';
import Router, {Link} from 'react-router-component';


export default class Header extends Component {
  render() {
    return (
        <div className="row">
          <div className="col-sm-6"><h1><Link href="/">Sustainable Fish</Link></h1></div>
          <div className="col-sm-6">
            <ul>
              <li><Link href="/about">About Us</Link></li>
            </ul>
          </div>
       </div>
    );
  }
};