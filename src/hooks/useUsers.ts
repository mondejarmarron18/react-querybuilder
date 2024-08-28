import { getUsers } from "@/utils/api/users";
import { useMutation } from "@tanstack/react-query";

const useUsers = () =>
  useMutation({
    mutationFn: async (searchQuery: string) => {
      try {
        const res = await getUsers(searchQuery);
        return res.data;
      } catch (error) {
        return error;
      }
    },
  });

export default useUsers;
