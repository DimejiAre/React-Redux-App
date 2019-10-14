import * as types from './actionTypes';

const initialBeers = []

const initialCount = 1;

export function beerReducer(state = initialBeers,action){
    switch(action.type){
        case types.ADD_BEERS:
            return action.payload
        default:
            return state
    }
}

export function countReducer(state = initialCount, action){
    switch(action.type){
        case types.UPDATE_COUNT:
            return action.payload
        default:
            return state
    }
}