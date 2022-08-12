

export const registration = (dispatch,getState,email,navigate) => {
  const url = "https://luna-team-3.propulsion-learn.ch/backend/api/registration/";
  const method = "POST";
  const headers = new Headers({'Content-type':'application/json'});
  let body = {email};
  body = JSON.stringify(body);    
  const config = {method,headers,body}
  fetch(url,config)
  .then(response => {response.json()
  if(response.status === 200) {
    dispatch({type:"email",payload:email});
    localStorage.setItem("email",email);
    navigate("/registration/confirmation");
  }else return  alert("Email already exists or no input was given")
  });
  }

export const fetchAndDispatchToken = (dispatch,getState,email,password,navigate) => {
  const url = "https://luna-team-3.propulsion-learn.ch/backend/api/auth/token/";
  const method = "POST";
  const headers = new Headers({'Content-type':'application/json'});
  let body = {email,password};
  body = JSON.stringify(body);    
  const config = {method,headers,body}
  fetch(url,config)
  .then(response => response.json())
  .then(data => {
      if(data.access){
          dispatch({type:"setToken",payload:data.access});
          localStorage.setItem("token",data.access);
          navigate("/");
      }else if(!data.access){
        return alert("Please use an exsisting Email and password");
      }
  })
}

export const patchRegistrationValidation = (dispatch,getState,code,email,username,location,password,password_repeat,navigate) => {
  const url = "https://luna-team-3.propulsion-learn.ch/backend/api/registration/validate/";
  const method = "PATCH";
  const headers = new Headers({'Content-type':'application/json'});
  let body = {email,username,code,password,password_repeat,location};
  body = JSON.stringify(body);    
  const config = {method,headers,body}
  fetch(url,config)
  .then(response => {response.json()
      if(response.status === 200){
          dispatch({type:"setUserInfo",payload:body});
          localStorage.setItem("user",body);
          navigate("/");
      }else if(response.status !== 200){
        return alert("Please confirm your inputs");
      }
    });
}