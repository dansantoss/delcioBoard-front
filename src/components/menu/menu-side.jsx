
import React, { Component } from 'react';
import MenuContent from './menu-content';
import config from '../../config'
import { Link } from 'react-router-dom';


var menuHome = true;
var menuRegister = true;

export default class MenuLateral extends Component {

  render() {
    return (
      <div>
        <div id="wrapper" className="wrapper mt-6">
          {/* SIDEBAR WRAPPER */}
          <nav id="sidebar-wrapper" className="active">
            <ul className="sidebar-nav">
              {
                config.menus.map(menu => (
                  ((menu.link === '/' && menuHome) || (menu.link === '/register' && menuRegister)) &&

                  < li className="nav-item" key={menu.link} >
                    <Link className="nav-link" to={menu.link} >{menu.titulo}</Link>
                  </li >
                ))
              }
            </ul>
          </nav>
          {/* FIM SIDEBAR WRAPPER */}
          {/* PAGE CONTENT WRAPPER */}

          <MenuContent {...this.props} />
          {/* FIM PAGE CONTENT WRAPPER */}
        </div>
      </div>
    )
  }
}