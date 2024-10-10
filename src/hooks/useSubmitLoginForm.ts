import loginInstance from "@/app/api/loginInstance";
import { useUserStore } from "@/store/userStore";
import { LoginFormData } from "@/types";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const submitForm = async (formData: LoginFormData): Promise<any> => {
  const response = await loginInstance.post<any>("/login", formData);
  return response.data;
};

const useSubmitLoginForm = () => {
  const router = useRouter();
  const setUser = useUserStore((state) => state.setUser);

  return useMutation({
    mutationFn: submitForm,
    onSuccess: (data) => {
      Cookies.set("accessToken", data.accessToken, { expires: 1 }); // Expires in 1 day
      Cookies.set("user", JSON.stringify(data), { expires: 1 });
      setUser(data);
      setTimeout(() => {
        router.push("/home");
      }, 1000);
    },
    onError: (error) => {
      console.error("Error submitting data:", error);
    },
  });
};

export default useSubmitLoginForm;
