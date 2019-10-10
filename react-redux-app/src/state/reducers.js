import * as types from './actionTypes';

const initialBeers = [{name: "something", id: 1, description: "something"}]

export function beerReducer(state = initialBeers,action){
    switch(action.type){
        default:
            return state
    }
}