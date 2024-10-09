// src/app/login/page.tsx
import loginImage from "@/assets/login-img.jpg";
import LoginForm from "@/components/loginForm";
import { Grid } from "@mui/material";
import Image from "next/image";

export default function Login() {
  return (
    <>
      <section className="bg-gray-50 min-h-screen flex items-center justify-center overflow-hidden">
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          <Grid container spacing={2} alignItems="center">
            {/* Form Section */}
            <Grid item xs={12} md={6}>
              <Image
                width={500} // The intrinsic width of the image
                height={300} // The intrinsic height of the image
                layout="responsive"
                className="rounded-2xl"
                src={loginImage}
                alt="Login Visual"
              />
            </Grid>

            {/* Image Section */}
            <Grid item xs={12} md={6} className="hidden md:block">
              <LoginForm />
            </Grid>
          </Grid>
        </div>
      </section>
    </>
  );
}
