import { useQuery } from '@tanstack/react-query';
import useAuth from '../Firebase/UseAuth/useAuth';
import useAxiosPublic from './useAxiosPublic';

function useRole() {
    const { user } = useAuth();
const axiosPublic = useAxiosPublic()
const { data: users = [] , refetch } = useQuery({
  queryKey: [user?.email, "users"],
  queryFn: async () => {
    const res = await axiosPublic.get(`/users/premium/${user?.email}`);
    return res.data;
  },
});
  return [users , refetch]
}

export default useRole
