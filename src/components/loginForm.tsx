"use client";
import SnackbarComponent from "@/components/snackbar"; // Import the Snackbar component
import useSubmitLoginForm from "@/hooks/useSubmitLoginForm";
import { LoginFormData } from "@/types";
import { Button, Grid, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

type SnackbarSeverity = "success" | "error";

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormData>();

  const mutation = useSubmitLoginForm(); // Use the custom hook
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: SnackbarSeverity; // Use the custom type
  }>({ open: false, message: "", severity: "success" });
  const router = useRouter(); // Use router for navigation

  const onSubmit = (data: any) => {
    mutation.mutate(data, {
      onSuccess: () => {
        reset();
        setSnackbar({
          open: true,
          message: "Login successful!",
          severity: "success",
        });
      },
      onError: (error) => {
        console.error("Error submitting data:", error);
        setSnackbar({
          open: true,
          message: "Login failed! Please try again.",
          severity: "error",
        });
      },
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Grid container spacing={2} sx={{ padding: 3 }}>
          {/* Username Field */}
          <Grid item xs={12}>
            <Controller
              name="username"
              control={control}
              defaultValue=""
              rules={{ required: "Username is required" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Username"
                  variant="outlined"
                  fullWidth
                  size="small"
                  error={!!errors.username}
                  helperText={errors.username?.message}
                  margin="normal"
                />
              )}
            />
          </Grid>

          {/* Password Field */}
          <Grid item xs={12}>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{ required: "Password is required" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  size="small"
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  margin="normal"
                />
              )}
            />
          </Grid>
        </Grid>

        <div className="flex justify-center items-center mb-3 mr-3">
          <Button
            type="submit"
            variant="outlined"
            color="primary"
            className="mt-4"
            size="small"
          >
            Login
          </Button>
        </div>
      </form>

      {/* Snackbar for notification */}
      <SnackbarComponent
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleCloseSnackbar}
      />
    </>
  );
};

export default LoginForm;
