import * as types from './actionTypes';
import axios from 'axios';

const beerApi = 'https://api.punkapi.com/v2/beers'

export const addBeers = beers => {
    return {
        type: types.ADD_BEERS,
        payload: beers
    }
}

export const getBeers = () => dispatch => {
    axios.get(beerApi)
    .then(res => {
        const beers = res.data
        dispatch(addBeers(beers))
    })
}