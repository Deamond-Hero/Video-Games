import {GET_ALL_VIDEOGAMES,
        GET_VIDEOGAME_ID,
        GET_VIDEOGAME_NAME,


} from "./actions";


const initialState = {
    videoGames: [],
    genres:[],



};


const rootReducer = (state = initialState, action) => {
    switch (action.type){
      case GET_ALL_VIDEOGAMES:
        return {...state, videoGames : action.payload};
      case GET_VIDEOGAME_ID:
        return {...state, videoGames : action.payload};
      case GET_VIDEOGAME_NAME:
        return {...state, videoGames : action.payload};
  

        default: 
        
            return{...state}
    }
}

export default rootReducer;