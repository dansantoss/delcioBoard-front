import React, { Component } from 'react';

export default class menuHeader extends Component {

  reload(evento) {
    evento.preventDefault();
    this.props.reload();
  }

  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-dark bg-primary">
                  
          {this.props.exibirMenuLateral &&
            <ul id="menu-toggle" className="navbar-nav">
              <button id="sidebarCollapse" className="hamburguer">
                <span></span>
                <span></span>
                <span></span>
              </button>
            </ul>
          }
          <h2 className="text-white">Délcio Board</h2>
          <ul className="navbar-nav ml-auto">
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
