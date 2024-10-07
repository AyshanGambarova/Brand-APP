import loginInstance from "@/app/api/loginInstance";
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

  return useMutation({
    mutationFn: submitForm,
    onSuccess: (data) => {
      // Store the accessToken in cookies
      Cookies.set("accessToken", data.accessToken, { expires: 1 }); // Set expiration as needed

      // Redirect to the home page after successful login
      router.push("/home");
    },
    onError: (error) => {
      console.error("Error submitting data:", error);
    },
  });
};

export default useSubmitLoginForm;
