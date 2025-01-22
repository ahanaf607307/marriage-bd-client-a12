import { useQuery } from '@tanstack/react-query';
import useAuth from '../Firebase/UseAuth/useAuth';
import useAxiosSecure from './useAxiosSecure';

function useBiodata() {
    const axiosSecure = useAxiosSecure();
    const { user , loading  } = useAuth();
    const { data: isBiodata, isPending: isBiodataLoading } = useQuery({
      queryKey: [user?.email, "isBiodata"],
      enabled: !!user?.email&& !!localStorage.getItem(`access-token`),
      queryFn: async () => {
        const res = await axiosSecure.get(`/biodatas-existing/${user.email}`);
        return res.data?.biodata;
      },
    });
    return [isBiodata, isBiodataLoading];
}

export default useBiodata
