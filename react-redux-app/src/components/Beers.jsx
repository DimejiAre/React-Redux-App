import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../state/actionCreators';
import Beer from './Beer';
import '../scss/Beers.scss';

export function Beers(props){
    const {beers, getBeers, count} = props;
    useEffect(()=> {
        getBeers();
    },[])

    return (
        <div className='beers-page'>
            <div className='pagination'>
                <button onClick={e => getBeers(count-1)}>Previous</button>
                <button onClick={e => getBeers(count+1)}>Next</button>
            </div>
            <div className='beers'>
                {
                    beers?
                    beers.map(beer => (
                        <Beer key={beer.id} beer={beer} />
                    ))
                    : null
                }
            </div>
            <div className='pagination'>
                <button onClick={e => getBeers(count-1)}>Previous</button>
                <button onClick={e => getBeers(count+1)}>Next</button>
            </div>
        </div>   
    )
}

export default connect(
    state => state,
    actionCreators
)(Beers);