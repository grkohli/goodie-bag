/* eslint-disable no-case-declarations */
import axios from 'axios';

const initialState = {
  candies: []
}

//ACTION TYPES
const GOT_CANDIES_FROM_DB = 'GOT_CANDIES_FROM_DB'; 
const ADD_CANDY = 'ADD_CANDY'; 

//ACTION CREATORS
export const gotCandies = (candies) => {
  return {
    type: GOT_CANDIES_FROM_DB,
    candies: candies
  }
}

export const addCandy = (id, name) => {
  return {
      type: ADD_CANDY,
      id: id,
      name: name
  }
};


export const getCandies = () => {
  return async (dispatch) => {
    const response = await axios.get('/api/candies');
    const candiesData = await response.data;
    console.log(candiesData);
    dispatch(gotCandies(candiesData))
  }
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_CANDIES_FROM_DB: 
      return {...state, candies: action.candies}
    // case ADD_CANDY:
    //   const copyOfCandies = [...state.candies];
    //   const newCandy = {
    //     id: action.id,
    //     name: action.candy,
    //     quantity: 1
    //   }
    //   const withNewCandy = copyOfCandies.concat([newCandy]);
    //   return {...state, candies: withNewCandy};
    default:
      return state;
  }
}

export default rootReducer
