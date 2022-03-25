

import React, { Component } from 'react';
import './index.scss';

interface Props {
    showDetail: boolean;
    setShowDetail: Function;
    detail?: any;
}

interface State {
}

class DetailModal extends Component<Props, State> {
    render() {
        return (
            <div hidden={!this.props.showDetail}>
                <div
                    className="modal-background"
                    onClick={()=>this.props.setShowDetail()} >
                    {this.props.detail && <>
                        <div className="modal-card">
                            <div className='name'>{this.props.detail.name}</div>
                                <table className='table'>
                                    <tr><td>Status: </td><td>{this.props.detail.status}</td></tr>
                                    <tr><td>Species: </td><td>{this.props.detail.species}</td></tr>
                                    <tr><td>Gender: </td><td>{this.props.detail.gender}</td></tr>
                                    <tr><td>Origin: </td><td>{this.props.detail.origin.name}</td></tr>
                                    <tr><td>Actual location: </td><td>{this.props.detail.location.name}</td></tr>
                                </table>                
                        </div>
                    </>}
                </div>
            </div>
        )
    }
}

export default DetailModal;