import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../state/actionCreators';
import Beer from './Beer'

export function Beers(props){
    const {beers} = props;
    return (
        <div>
            {
                beers.map(beer => (
                    <Beer beer={beer} />
                ))
            }
        </div>
    )
}

export default connect(
    state => state,
    actionCreators
)(Beers);