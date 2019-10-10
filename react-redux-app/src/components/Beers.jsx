import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../state/actionCreators';
import Beer from './Beer'

export function Beers(props){
    debugger
    const {beers, getBeers} = props;
    useEffect(()=> {
        getBeers();
    },[])

    return (
        <div>
            {
                beers.map(beer => (
                    <Beer key={beer.id} beer={beer} />
                ))
            }
        </div>
    )
}

export default connect(
    state => state,
    actionCreators
)(Beers);