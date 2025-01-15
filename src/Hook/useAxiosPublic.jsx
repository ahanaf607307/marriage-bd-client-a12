import axios from "axios";

const axiosPublic = axios.create({
    baseURL : `${import.meta.env.VITE_SERVER_URL}`
})

function useAxiosPublic() {
  return axiosPublic
}

export default useAxiosPublic
