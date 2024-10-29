import axiosInstance from "@/app/api/axiosInstance";
import { Photo } from "@/types/index";
import { useInfiniteQuery } from "@tanstack/react-query";

const fetchPhotos = async ({ pageParam = 1 }): Promise<Photo[]> => {
  const response = await axiosInstance.get<Photo[]>("/photos", {
    params: { _page: pageParam, _limit: 10 },
  });
  return response.data;
};

const usePhotos = (initialData?: Photo[]) => {
  return useInfiniteQuery({
    queryKey: ["photos"],
    queryFn: fetchPhotos,
    initialData: initialData
      ? { pages: [initialData], pageParams: [1] }
      : undefined,
    getNextPageParam: (lastPage: any, pages: any) => {
      return lastPage.length ? pages.length + 1 : undefined;
    },
  });
};

export default usePhotos;
