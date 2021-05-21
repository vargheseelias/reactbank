import axios  from 'axios';

const BaseUrl="http://localhost:8000";

const login = (data)=>{
   return axios.post(BaseUrl+"/login",data,{
      withCredentials:true
   })
      
}

const register = (data)=>{
   return axios.post(BaseUrl+"/register",data,{
      withCredentials:true
   })
}

const withdraw=(data)=>{
   return axios.post(BaseUrl+"/withdraw",data,{
      withCredentials:true
   })
}

const deposit=(data)=>{
   return axios.post(BaseUrl+"/deposit",data,{
      withCredentials:true
   })
}
 const logger={
    login,
   register,
   withdraw,
   deposit
}

export default logger