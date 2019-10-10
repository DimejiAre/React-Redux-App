import * as types from './actionTypes';

export const addBeers = beers => {
    return {
        type: types.ADD_BEERS,
        payload: beers
    }
}