import React, { Component } from 'react';

export default class MenuContent extends Component {
    render() {
        return (
            <div className="mt-2" id="page-content-wrapper">
                <div className="container">
                    {
                        this.props.renderComponent()
                    }
                </div>
            </div>
        )
    }
}