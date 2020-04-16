import React, { Component } from 'react'
import axios from 'axios'
class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectOption: "1"
    };
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
  }

  handleOptionChange = changeEvent => {
    this.setState({
      selectOption: changeEvent.target.value
    });
  };
  render() {
    return (
      <form onSubmit={
        this.handleSubmit.bind(this)
      }>
        <div>
          <label>Adicionar Dash</label>
          <input placeholder="Título"
            ref={input => this.title = input} />
          <input placeholder="Descrição"
            ref={input => this.description = input} />
          <input placeholder="URL"
            ref={input => this.url = input} />
          <form>
            <label >
              <input type="radio"
                name="rbtn_public"
                value="1"
                checked={this.state.selectOption === "1"}
                onChange = {this.handleOptionChange} />
              Público</label>
            <label >
              <input type="radio"
                name="rbtn_private"
                value="2"
                checked={this.state.selectOption === "2"}
                onChange = {this.handleOptionChange} />
              Privado</label>
          </form>
          <button type="submit">Adicionar</button>
        </div>
      </form>
    )
  }
}

export default Register;