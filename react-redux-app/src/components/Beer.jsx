import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../state/actionCreators';
import '../scss/Beers.scss';

function Beer({beer}){
    return (
        <div className='beer'>
            <h2>{beer.name}</h2>
            <img src={beer.image_url} alt={beer.name} />
            <p>{beer.tagline}</p>
            <div className='beer-info'>
                <p><strong>Description: </strong>{beer.description}</p>
                <p><strong>First Brewed: </strong>{beer.first_brewed}</p>
                <span><strong>Food Pairing: </strong></span>
                <ul>{beer.food_pairing? beer.food_pairing.map(food => (
                    <li key={food}>{food}</li>
                )): null}</ul>
                <p><strong>Brewers Tips: </strong>{beer.brewers_tips}</p>
            </div>
        </div>
    )
}

export default connect(
    state => state,
    actionCreators
)(Beer);