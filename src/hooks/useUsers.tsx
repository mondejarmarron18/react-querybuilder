import { getUsers } from "@/utils/api/users";
import { User } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";

const useUsers = () => {
  const mutation = useMutation<User[], unknown, string>({
    mutationFn: async (searchQuery: string) => {
      try {
        const res = await getUsers(searchQuery);
        const data = await res.data;

        if (!data) {
          throw new Error("Something went wrong");
        }

        return res.data;
      } catch (error) {
        return error;
      }
    },
  });

  return mutation;
};

export default useUsers;
