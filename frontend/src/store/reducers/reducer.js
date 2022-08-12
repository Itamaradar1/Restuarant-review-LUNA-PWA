//set initial state
const initialState = {
    token: undefined,
    email:"",
    user:[],
} 

//2. Create reducer
const Reducer = (state=initialState, action) => {
    let newState = {...state};
    switch(action.type){
        case "setToken":
            newState.token = action.payload;
            return newState;
        case "email":
            newState.email = action.payload;
            return newState;  
        case "setUserInfo":
            newState.user = action.payload;
            return newState;     
        default:
            return newState;
    }
}

export default Reducer;