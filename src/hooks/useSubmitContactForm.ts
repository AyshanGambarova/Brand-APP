import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/app/api/axiosInstance";
import { FormData } from "@/types"; // Import the types

const submitForm = async (formData: FormData): Promise<any> => {
  const response = await axiosInstance.post<any>("/users", formData);
  return response.data;
};

const useSubmitContactForm = () => {
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

export default useSubmitContactForm;
