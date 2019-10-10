import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../state/actionCreators';
import Beer from './Beer';
import '../scss/Beers.scss';

export function Beers(props){
    const {beers, getBeers} = props;
    useEffect(()=> {
        getBeers();
    },[])

    return (
        <div className='beers'>
            {
                beers?
                beers.map(beer => (
                    <Beer key={beer.id} beer={beer} />
                ))
                : null
            }
        </div>
    )
}

export default connect(
    state => state,
    actionCreators
)(Beers);