import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../Firebase/UseAuth/useAuth";

const axiosSecure = axios.create({
    baseURL : `${import.meta.env.VITE_SERVER_URL}`
})

function useAxiosSecure() {
  const navigate = useNavigate();
  const { logOutUser } = useAuth();

  axiosSecure.interceptors.request.use(function (config) {
      const token = localStorage.getItem('access-token')
    
      config.headers.authorization = `Bearer ${token}`;
      return config;
  }, function (error) {
      return Promise.reject(error);
  });



  axiosSecure.interceptors.response.use(function (response) {
      return response;
  }, async (error) => {
      const status = error.response.status;
     
      if (status === 401 || status === 403) {
          await logOutUser();
          navigate('/login');
      }
      return Promise.reject(error);
  })


  return axiosSecure
}

export default useAxiosSecure
