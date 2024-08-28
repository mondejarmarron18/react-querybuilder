import api from "..";

export const getUsers = (searchQuery?: string) => {
  return api.get(`/user?${searchQuery}`);
};
