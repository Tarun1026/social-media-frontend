import axios from "axios";
const instance=axios.create({
    baseURL:"https://snap-sphere-backend.onrender.com/api/v1"
    
  
})
export default instance;