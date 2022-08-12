const initialState = {
    allRestaurants: [],
    allUsers: [],
    searchedRestaurants: [],
} 

//2. Create reducer
const FetchInfosReducer = (state=initialState, action) => {
    const newState = {...state};
    switch(action.type){
        case "GET_ALLRESTAURANTS":
            const incoming = action.payload;
            if(incoming.length>0){
                const incomingCopy = incoming.slice();
                newState.allRestaurants = incomingCopy;
            }
            return newState;
        case "GET_SEARCHEDRESTAURANTS":
            const incomingSearchedRestaurants = action.payload;
            if(incomingSearchedRestaurants.length>0){
                const incomingCopy = incomingSearchedRestaurants.slice();
                newState.searchedRestaurants = incomingCopy;
            }
            return newState;
        case "GET_ALLUSERS":
            const incomingUsers = action.payload;
            if(incomingUsers.length>0){
                const incomingUsersCopy = incomingUsers.slice();
                newState.allUsers = incomingUsersCopy;
            }
            return newState;
        default:
            return state;
    }
}

export default FetchInfosReducer;