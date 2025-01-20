import { useQuery } from '@tanstack/react-query';
import useAuth from '../Firebase/UseAuth/useAuth';
import useAxiosPublic from './useAxiosPublic';

function useRole() {
    const { user , loading } = useAuth();
const axiosPublic = useAxiosPublic()
const { data: users = [] , refetch } = useQuery({
  queryKey: [user?.email, "users"],
  enabled : !loading,
  queryFn: async () => {
    console.log('asking to checking premium')
    const res = await axiosPublic.get(`/users/premium/${user?.email}`);
    return res.data;
  },
});
  return [users , refetch]
}

export default useRole
