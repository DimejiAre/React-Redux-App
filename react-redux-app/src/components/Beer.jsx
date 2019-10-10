import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../state/actionCreators';

function Beer({beer}){
    return (
        <div>
            <h2>{'Name: ' + beer.name}</h2>
            <p>{'Description: ' + beer.description}</p>
        </div>
    )
}

export default connect(
    state => state,
    actionCreators
)(Beer);