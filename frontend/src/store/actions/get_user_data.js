/*

export const fetchUserPosts = (dispatch,getState, token) => {
    const url = "https://motion.propulsion-home.ch/backend/api/social/posts/me/";
    const method = "GET";
    const headers = new Headers({'Authorization':`Bearer ${token}`});
    const config = {method,headers};
    fetch(url,config)
    .then(response => response.json())
    .then(data => {
        if(data){
        console.log(data)};
    })

}

*/

export const fetchUserData = (dispatch, getState, token) => {
    const url = "https://luna-team-3.propulsion-learn.ch/backend/api/me/";
    const method = "GET";
    const headers = new Headers({'Authorization':`Bearer ${token}`});

    const config = {method,headers};
    fetch(url,config)
        .then(response => response.json())
        .then(data => {
            if(data){
            console.log(data)};
        });
}