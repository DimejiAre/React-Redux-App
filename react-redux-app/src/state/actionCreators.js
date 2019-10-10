import * as types from './actionTypes';
import axios from 'axios';

const beerApi = 'https://api.punkapi.com/v2/beers?page='

export const addBeers = beers => {
    return {
        type: types.ADD_BEERS,
        payload: beers
    }
}

export const updateCount = num => {
    return {
        type: types.UPDATE_COUNT,
        payload: num
    }
}

export const getBeers = (id=1) => dispatch => {
    if(id > 0){
        axios.get(beerApi + JSON.stringify(id))
        .then(res => {
            const beers = res.data
            dispatch(addBeers(beers))
            dispatch(updateCount(id))
        })
    }
}