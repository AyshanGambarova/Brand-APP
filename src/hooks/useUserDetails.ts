import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/app/api/axiosInstance";
import { User } from "@/types";

// Fetch user details
const fetchUserDetails = async (userId: string): Promise<User> => {
  const response = await axiosInstance.get<User>(`/users/${userId}`);
  return response.data;
};

// Custom hook for user details
const useUserDetails = (userId: string) => {
  return useQuery<User, Error>({
    queryKey: ["users", userId],
    queryFn: () => fetchUserDetails(userId),
    enabled: !!userId,
  });
};

export default useUserDetails;
