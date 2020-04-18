import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllDashAtributtes } from '../components/actionCreators';
import Iframe from 'react-iframe';
import MenuLateral from './menu/menu-side';
import MenuHeader from './menu/menu-header';
import { toogleMenuScript } from './../scripts';
import { MDBInput , MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

class HomeDash extends Component {
    constructor(props) {
        super(props);        
        this.state = {
            search: ""
        }
    }

    componentDidMount() {
        toogleMenuScript();
        this.props.getAllDashAtributtes();
    }

    onchange = e => {
        this.setState({ search: e.target.value });
      };

    renderComponent(){
        const { search } = this.state;
        const { dashReducer } = this.props.store;
        const filteredCountries = dashReducer.dados.filter(row => {
            return row.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        });
        return (
            <div>
                    <main style={{ marginTop: "1rem" }}>
                        < div className="container">
                            <div className="row">
                                <div className="col">
                                    <MDBInput
                                    label="Pesquisar Dash"
                                    outline size="lg"
                                    outline icon="search"
                                    onChange={this.onchange}
                                    />
                                </div>
                                <div className="col" />
                            </div>
                                {this.props.store.dashReducer.dados.length <= 0 && 
                                    (
                                    <div className="container card mt-3">
                                        <div className="m-3">
                                            Nenhum resultado encontrado
                                        </div>
                                    </div>
                                    )
                                }
                                {this.props.store.dashReducer.dados.length > 0 && 
                                (
                                <div className="row">                                                                   
                                     {filteredCountries.map(row => {
                                        return this.RenderData(row);
                                    })}
                                    </div>                                                                  
                                )}           
                        </div>
                    </main>
            </div>
        )
    }

    RenderData = row => {
            return (
                <MDBCol>
                <MDBCard style={{ width: "37.5em", marginTop: "20px" }}>
                    <p><Iframe url={row.url}
                        width="600"
                        height="320"
                        id="myId"
                        className="myClassname"
                        // display="initial"
                        position="relative" /></p>
                    <MDBCardBody>
                    <MDBCardTitle>{row.title}</MDBCardTitle>
                    <MDBCardText>{row.description}</MDBCardText>
                   </MDBCardBody>
                </MDBCard>
                </MDBCol>
            )
    }

    render() {
        return (
            <div className="home" >
                <MenuHeader {...this.props} exibirMenuLateral={true}/>
                <MenuLateral {...this.props} renderComponent={this.renderComponent.bind(this)}/>
            </div>
            )
    }



}

const mapStateToProps = state => { return { store: state } };
const mapDispatchToProps = dispatch => bindActionCreators({ getAllDashAtributtes }, dispatch)

export default HomeDash = connect(mapStateToProps, mapDispatchToProps)(HomeDash);