"use client";
import useSubmitLoginForm from "@/hooks/useSubmitLoginForm";
import { LoginFormData } from "@/types";
import { Alert, Button, Grid, Snackbar, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormData>();

  const mutation = useSubmitLoginForm(); // Use the custom hook
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const router = useRouter(); // Use router for navigation

  const onSubmit = (data: any) => {
    mutation.mutate(data, {
      onSuccess: () => {
        reset();
        setOpenSnackbar(true);
      },
      onError: (error) => {
        console.error("Error submitting data:", error);
      },
    });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
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

      {/* Snackbar for notification */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          Login successful!
        </Alert>
      </Snackbar>
    </form>
  );
};

export default LoginForm;
