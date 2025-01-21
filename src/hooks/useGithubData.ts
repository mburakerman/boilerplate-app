import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/utils/axiosInstance";

type Github = {
  id: string;
  name: string;
};

export const useGithubData = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["github"],
    queryFn: async () => {
      const response = await axiosInstance.get<Github>(
        "https://api.github.com/repos/TanStack/query",
      );

      return response.data;
    },
  });

  return {
    data,
    isLoading,
    error,
    refetch,
  };
};
