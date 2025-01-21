import { axiosInstance } from "@/utils/axiosInstance";
import { useMutation } from "@tanstack/react-query";

type LoginParams = {
  password: string;
  email: string;
};

type LoginResponse = {
  data: {
    token: string;
    state: string;
    companyId: number;
    authorities: string[];
    message: string;
  };
  errorResponse: {
    code: string;
    message: string;
  };
  success: boolean;
};

export const useLogin = () => {
  const { mutateAsync, isSuccess, error, isPending, isError, data } =
    useMutation({
      mutationFn: async ({ email, password }: LoginParams) => {
        const response = await axiosInstance.post<LoginResponse>(`/login`, {
          email,
          password,
        });

        return response.data;
      },
      mutationKey: ["login"],
      onError: (err) => {
        console.error("Login error:", err);
      },
    });

  const login = async ({ email, password }: LoginParams) =>
    await mutateAsync({ email, password });

  return {
    login,
    isSuccess,
    error,
    isPending,
    isError,
    data,
  };
};
