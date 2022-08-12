export const fetchAndDispatchSearchData = (dispatch,getState,search) => {
    const url = `https://luna-team-3.propulsion-learn.ch/backend/api/restaurants/category/${search}/`;
    const method = "GET";
    const headers = new Headers({'Content-type':'application/json'});
    const config = {method,headers}
    fetch(url,config)
    .then(response => response.json())
    .then(data => {
        if(data){
            //console.log("data send", data)
            dispatch({type:"GET_SEARCHEDRESTAURANTS",payload:data});
        }else if(!data){
            console.log("No data that meets serach query");
        }
    })
  }