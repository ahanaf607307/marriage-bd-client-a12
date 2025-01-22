import { useQuery } from "@tanstack/react-query";
import useAuth from "../Firebase/UseAuth/useAuth";
import useAxiosSecure from "./useAxiosSecure";

function useAdmin() {
  const axiosSecure = useAxiosSecure();
  const { user , loading  } = useAuth();
  const { data: isAdmin, isPending: isAdminLoadig } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    enabled: !!user?.email&& !!localStorage.getItem(`access-token`),
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user.email}`);
      return res.data?.admin;
    },
  });
  return [isAdmin, isAdminLoadig];
}

export default useAdmin;
