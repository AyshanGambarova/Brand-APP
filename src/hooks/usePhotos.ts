import { useInfiniteQuery } from "@tanstack/react-query";
import axiosInstance from "@/app/api/axiosInstance";
import { Photo } from "@/types/index";

const fetchPhotos = async ({ pageParam = 1 }): Promise<Photo[]> => {
  const response = await axiosInstance.get<Photo[]>("/photos", {
    params: { _page: pageParam, _limit: 10 },
  });
  return response.data;
};

const usePhotos = () => {
  return useInfiniteQuery({
    queryKey: ["photos"],
    queryFn: fetchPhotos,
    initialPageParam: 1,
    getNextPageParam: (lastPage: any, pages: any) => {
      return lastPage.length ? pages.length + 1 : undefined;
    },
  });
};

export default usePhotos;
