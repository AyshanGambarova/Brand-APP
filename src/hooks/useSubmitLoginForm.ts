import { useMutation } from "@tanstack/react-query";
import loginInstance from "@/app/api/loginInstance";
import { LoginFormData } from "@/types";

const submitForm = async (formData: LoginFormData): Promise<any> => {
  const response = await loginInstance.post<any>("/login", formData);
  return response.data;
};

const useSubmitLoginForm = () => {
  return useMutation({
    mutationFn: submitForm,
    onSuccess: () => {
      console.log("Data submitted successfully!");
    },
    onError: (error) => {
      console.error("Error submitting data:", error);
    },
  });
};

export default useSubmitLoginForm;
