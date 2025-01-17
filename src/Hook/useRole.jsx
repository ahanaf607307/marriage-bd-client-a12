import { useQuery } from '@tanstack/react-query';
import useAuth from '../Firebase/UseAuth/useAuth';

function useRole() {
    const { user } = useAuth();

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
