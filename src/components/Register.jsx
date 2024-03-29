import React, { Component } from 'react';
import axios from 'axios';
import { toogleMenuScript } from './../scripts';
import MenuLateral from './menu/menu-side';
import MenuHeader from './menu/menu-header';


class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectOption: "1"
    };
  }

  componentDidMount() {
    toogleMenuScript();
  }

  renderComponent(){
    return (
      <div className="shadow-box-example z-depth-1">  
      <div className="card mt-3">
        <div className="row m-3">
          <div id="collapseFiltro" className="card-body collapse show">
      <form onSubmit={        
        this.handleSubmit.bind(this)
      }>
        <div>          
          <div className="form-group">
          <label className="text-primary" htmlFor=""><i className="fas fa-chart-line"></i> Adicionar Dash</label>
          <input placeholder="Título" className="form-control"
            ref={(input) => this.title = input} />
            <hr/>
            <input placeholder="URL" className="form-control" 
            ref={(input) => this.url = input} />
            <hr/>
          <textarea placeholder="Descrição"  className="form-control"
            ref={(input) => this.description = input} />
            <hr/>          
          <div >
          <div class="custom-control custom-radio">
            <label >
              <input type="radio"
                name="rbtn_public"
                value="1"
                checked={this.state.selectOption === "1"}
                onChange = {this.handleOptionChange} /><i className="fas fa-book"></i> Público</label>
              </div>
              <div class="custom-control custom-radio">
            <label >
              <input type="radio" 
                name="rbtn_private"
                value="2"
                checked={this.state.selectOption === "2"}
                onChange = {this.handleOptionChange} /><i className="fas fa-lock"> </i> Privado</label>
                 </div>
          </div>
            </div>          
          <hr/>
          <button type="submit" className="btn btn-sm btn-success float-right"><i className="mr-2 fas fa-plus"></i>Adicionar</button>
        </div>
      </form>
      </div>
      </div>
    </div>
    </div>
    )
}

    async handleSubmit() {
    var dashAtributtes = {
      title: this.title.value,
      description: this.description.value,
      url: this.url.value,
      status: this.state.selectOption
    }
     const headers = {
     'Content-Type': 'application/json;charset=UTF-8'
    }
    await axios.post(`http://localhost:3001/v1/api/create`, dashAtributtes, headers)
    .then(
      alert("Dash cadastrado com sucesso!")
    )
  }

  handleOptionChange = changeEvent => {
    this.setState({
      selectOption: changeEvent.target.value
    });
  };

  render() {
    return (
      <div className="home" >
                <MenuHeader {...this.props} exibirMenuLateral={true}/>
                <MenuLateral {...this.props} renderComponent={this.renderComponent.bind(this)}/>
            </div>
    )
  }
}

export default Register;