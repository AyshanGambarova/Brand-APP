"use client";
import SnackbarComponent from "@/components/snackbar";
import useSubmitLoginForm from "@/hooks/useSubmitLoginForm";
import { LoginFormData, SnackbarSeverity } from "@/types";
import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormData>();

  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: SnackbarSeverity; // Use the custom type
  }>({ open: false, message: "", severity: "success" });

  // Pass setSnackbar to the hook
  const mutation = useSubmitLoginForm(setSnackbar);

  const onSubmit = (data: LoginFormData) => {
    mutation.mutate(data); // Trigger the mutation
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
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Enter a valid email address",
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Email"
                  variant="outlined"
                  fullWidth
                  size="small"
                  error={!!errors.email}
                  helperText={errors.email?.message}
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
