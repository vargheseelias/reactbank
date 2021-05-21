import { axios } from 'axios';
const BaseUrl="http://localhost:8000";

const login=(data)=>{
    axios.post(BaseUrl+'/login',data,{withCredentials:true})
}


export default {
login
    
}