import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axiosInstance from "@/app/api/axiosInstance";
import { User } from "@/types";

const fetchUsers = async (): Promise<User[]> => {
  const response = await axiosInstance.get<User[]>("/users");
  return response.data;
};

const useUsers = (): UseQueryResult<User[], Error> => {
  return useQuery<User[], Error>({
    queryKey: ["users"], // Unique query key
    queryFn: fetchUsers, // The function that fetches the data
  });
};

export default useUsers;
