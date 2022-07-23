import axios from 'axios';
import Cookies from 'js-cookie';

const register = (formData) => {
  return axios.post('https://e-gadget-app.herokuapp.com/api/users/signup', formData);
};

export const login =  async (formData) => {
    const response = await axios
        .post("https://e-gadget-app.herokuapp.com/api/users/login", formData);
  
    return response.data;
};
const logout =async () => {
  const response=await axios.get('https://e-gadget-app.herokuapp.com/api/users/logout');
  Cookies.remove('user');
  return response
};

const updateUser=async (formData,id) => {
const respose=await axios.patch(`https://e-gadget-app.herokuapp.com/api/users/${id}`,formData);
return respose.data;

}
const authService = { register, login, logout ,updateUser};
export default authService;

