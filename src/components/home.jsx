import React, { Component } from 'react';
import { Verif } from './Verif';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllDashAtributtes } from '../components/actionCreators';
import Iframe from 'react-iframe';
import MenuLateral from './menu/menu-side'
import menuHeader from './menu/menu-header'
class HomeDash extends Component {
    constructor(props) {
        super(props);
        this.getRowsData = this.getRowsData.bind(this);
        this.state = {
            tdata: []
        }
    }

    componentDidMount() {
        this.props.getAllDashAtributtes();
    }

    renderComponent(){
        return (
                <Verif
                    {...this.props}
                    data={this.state.tdata}
                    getRowsData={this.getRowsData.bind(this)}
                />
        )
    }

    getRowsData() {
        const { dashReducer } = this.props.store;
        return dashReducer.dados.map(row => {
            return (
                <div key={row.title}>
                    <h1>{row.title}</h1>
                    <p><Iframe url={row.url}
                        width="600"
                        height="320"
                        id="myId"
                        className="myClassname"
                        // display="initial"
                        position="relative" /></p>
                    <span>{row.description}</span>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="home" >
                <menuHeader {...this.props} exibirMenuLateral={true}/>
                <MenuLateral {...this.props} renderComponent={this.renderComponent.bind(this)}/>
            </div>
            )
    }



}

const mapStateToProps = state => { return { store: state } };
const mapDispatchToProps = dispatch => bindActionCreators({ getAllDashAtributtes }, dispatch)

export default HomeDash = connect(mapStateToProps, mapDispatchToProps)(HomeDash);