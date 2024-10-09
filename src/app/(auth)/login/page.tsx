// src/app/login/page.tsx
import loginImage from "@/assets/login.svg";
import LoginForm from "@/components/loginForm";
import { Grid } from "@mui/material";
import Image from "next/image";

export default function Login() {
  return (
    <>
      <section className="bg-gray-50 min-h-screen flex items-center justify-center overflow-hidden">
        <div className="bg-gray flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          <Grid container spacing={2} alignItems="center">
            {/* Form Section */}
            <Grid item xs={12} sm={6} md={6}>
              <Image
                layout="responsive"
                className="rounded-2xl"
                src={loginImage}
                alt="Login Visual"
              />
            </Grid>
            {/* Image Section */}
            <Grid item xs={12} sm={6} md={6}>
              <LoginForm />
            </Grid>
          </Grid>
        </div>
      </section>
    </>
  );
}
