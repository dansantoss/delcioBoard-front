import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class menuHeader extends Component {

  reload(evento) {
    evento.preventDefault();
    this.props.reload();
  }

  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-dark bg-primary">

          {/* <Link className="navbar-brand" to="/home">
<img src={require("../../imagens/portal-do-saber_light.svg")} alt="clinicas" className="d-block mx-auto" width="180" />
</Link> */}

          {this.props.exibirMenuLateral &&
            <ul id="menu-toggle" className="navbar-nav">
              <button id="sidebarCollapse" className="hamburguer">
                <span></span>
                <span></span>
                <span></span>
              </button>
            </ul>
          }
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/logout"><i className="fas fa-sign-out-alt"></i> Sair</Link>
            </li>
          </ul>
        </nav>

        <div className="color-bar color-bar-fixed">
          <div className="yellow"></div>
          <div className="orange"></div>
          <div className="red"></div>
          <div className="rose"></div>
          <div className="purple"></div>
          <div className="deep-purple"></div>
          <div className="blue"></div>
          <div className="cyan"></div>
          <div className="light-green"></div>
          <div className="green"></div>
        </div>
      </div>
    )
  }
}
