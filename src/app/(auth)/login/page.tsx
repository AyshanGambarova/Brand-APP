// src/app/login/page.tsx
import { Grid } from "@mui/material";
import LoginForm from "@/components/loginForm";

export default function Login() {
  return (
    <>
      <section className="bg-gray-50 min-h-screen flex items-center justify-center overflow-hidden">
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          <Grid container spacing={2} alignItems="center">
            {/* Form Section */}
            <Grid item xs={12} md={6}>
              <LoginForm />
            </Grid>

            {/* Image Section */}
            <Grid item xs={12} md={6} className="hidden md:block">
              <img
                className="rounded-2xl"
                src="https://images.unsplash.com/photo-1616606103915-dea7be788566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
                alt="Login Visual"
              />
            </Grid>
          </Grid>
        </div>
      </section>
    </>
  );
}
