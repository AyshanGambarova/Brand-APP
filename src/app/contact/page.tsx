import React from "react";
import MapComponent from "@/components/Map";
import ContactForm from "@/components/ContactForm";
import { Grid } from "@mui/material";

export default function Contact() {
  return (
    <Grid container sx={{ height: "100vh", overflow: "hidden" }}>
      {/* Left side for the map */}
      <Grid item xs={12} md={6} sx={{ height: "100%", overflow: "hidden" }}>
        <MapComponent />
      </Grid>
      {/* Right side for the contact form */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{ height: "100%", overflow: "auto", padding: 2 }}
      >
        <ContactForm />
      </Grid>
    </Grid>
  );
}
