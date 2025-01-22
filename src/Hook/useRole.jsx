import { useQuery } from '@tanstack/react-query';
import useAuth from '../Firebase/UseAuth/useAuth';
import useAxiosSecure from './useAxiosSecure';

function useRole() {
    const { user , loading } = useAuth();
const axiosSecure = useAxiosSecure()
const { data: users = [] , refetch } = useQuery({
  queryKey: [user?.email, "users"],
  enabled: !!user?.email&& !!localStorage.getItem(`access-token`),
  queryFn: async () => {
    console.log('asking to checking premium')
    const res = await axiosSecure.get(`/users/premium/${user?.email}`);
    return res.data;
  },
});
  return [users , refetch]
}

export default useRole
