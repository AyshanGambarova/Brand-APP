import React from "react";
import MapComponent from "@/components/map";
import ContactForm from "@/components/contactForm";
import { Grid } from "@mui/material";

export default function Contact() {
  return (
    <>
      <Grid container spacing={5}>
        {/* Left side for the map */}
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <MapComponent />
        </Grid>

        {/* Right side for the contact form */}
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <ContactForm />
        </Grid>
      </Grid>
    </>
  );
}
