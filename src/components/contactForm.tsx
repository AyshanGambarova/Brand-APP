"use client";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Alert,
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";

import { FormData } from "@/types";
import useSubmitContactForm from "@/hooks/useSubmitContactForm";

const nationalities = [
  { value: "aze", label: "Azerbaijan" },
  { value: "us", label: "United States" },
  { value: "ca", label: "Canada" },
  { value: "gb", label: "United Kingdom" },
  { value: "au", label: "Australia" },
];

export default function ContactForm() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const mutation = useSubmitContactForm(); // Use the custom hook

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const onSubmit = async (data: FormData) => {
    mutation.mutate(data, {
      onSuccess: () => {
        reset(); // Clear the form
        setOpenSnackbar(true); // Show notification
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
      <Grid container spacing={2}>
        {/* First Name */}
        <Grid item xs={12} sm={6}>
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            rules={{ required: "First Name is required" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="First Name"
                variant="outlined"
                fullWidth
                size="small"
                error={!!errors.firstName}
                helperText={errors.firstName?.message}
                margin="normal"
              />
            )}
          />
        </Grid>

        {/* Last Name */}
        <Grid item xs={12} sm={6}>
          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            rules={{ required: "Last Name is required" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Last Name"
                variant="outlined"
                fullWidth
                size="small"
                error={!!errors.lastName}
                helperText={errors.lastName?.message}
                margin="normal"
              />
            )}
          />
        </Grid>

        {/* Nationality Selection */}
        <Grid item xs={12} sm={6}>
          <Controller
            name="nationality"
            control={control}
            defaultValue=""
            rules={{ required: "Nationality is required" }}
            render={({ field }) => (
              <FormControl
                fullWidth
                error={!!errors.nationality}
                margin="normal"
              >
                <InputLabel>Nationality</InputLabel>
                <Select {...field}>
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {nationalities.map((nationality) => (
                    <MenuItem key={nationality.label} value={nationality.value}>
                      {nationality.label}
                    </MenuItem>
                  ))}
                </Select>
                {errors.nationality && (
                  <FormHelperText>{errors.nationality.message}</FormHelperText>
                )}
              </FormControl>
            )}
          />
        </Grid>

        {/* Gender Selection */}
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" gutterBottom>
            Gender
          </Typography>
          <Controller
            name="gender"
            control={control}
            defaultValue=""
            rules={{ required: "Gender is required" }}
            render={({ field }) => (
              <RadioGroup {...field} row>
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            )}
          />
          {errors.gender && (
            <FormHelperText error>{errors.gender.message}</FormHelperText>
          )}
        </Grid>

        {/* Email Field */}
        <Grid item xs={12}>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Email is not valid",
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
      </Grid>
      <div className="flex justify-end items-center mb-3 mr-3">
        <Button
          type="submit"
          variant="outlined"
          color="primary"
          className="mt-4"
          size="small"
        >
          Submit
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
          Form submitted successfully!
        </Alert>
      </Snackbar>
    </form>
  );
}
