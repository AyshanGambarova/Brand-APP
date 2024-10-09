import loginInstance from "@/app/api/loginInstance";
import { useUserContext } from "@/context/userContext"; // Import UserContext
import { LoginFormData } from "@/types";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie"; // Use js-cookie to manage cookies
import { useRouter } from "next/navigation";

const submitForm = async (formData: LoginFormData): Promise<any> => {
  const response = await loginInstance.post<any>("/login", formData);
  return response.data;
};

const useSubmitLoginForm = () => {
  const router = useRouter();
  const { setUser } = useUserContext(); // Get setUser from context

  return useMutation({
    mutationFn: submitForm,
    onSuccess: (data) => {
      Cookies.set("accessToken", data.accessToken, { expires: 1 });
      setUser(data); // Save user details in context
      router.push("/home");
    },
    onError: (error) => {
      console.error("Error submitting data:", error);
    },
  });
};

export default useSubmitLoginForm;
