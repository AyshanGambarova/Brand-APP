import instance from "@/app/api/dummyInstance";
import { LoginFormData } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios"; // Import AxiosError
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const submitForm = async (formData: LoginFormData): Promise<any> => {
  const response = await instance.post<any>("/login", formData);
  return response.data;
};

const useSubmitLoginForm = (
  setSnackbar: (snackbar: {
    open: boolean;
    message: string;
    severity: "success" | "error";
  }) => void
) => {
  const router = useRouter();
  // const setUser = useUserStore((state) => state.setUser);

  return useMutation({
    mutationFn: submitForm,
    onSuccess: (data) => {
      if (data.token) {
        // Store the token in cookies
        Cookies.set("token", data.token, { expires: 1 }); // Set expiration as needed
        // Redirect to the home page after successful login
        router.replace("/home");
        setSnackbar({
          open: true,
          message: "Login successful!",
          severity: "success",
        });
      }
    },
    onError: (error: AxiosError) => {
      const errorMessage =
        error.response?.data?.error || "Login failed! Please try again.";
      setSnackbar({ open: true, message: errorMessage, severity: "error" });
      localStorage.removeItem("token");
    },
  });
};

export default useSubmitLoginForm;
