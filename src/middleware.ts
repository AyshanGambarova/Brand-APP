import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Define the protected routes
const protectedRoutes = ["/", "/home", "/users/:path*", "/contact"];

export function middleware(request: NextRequest) {
  const token = request.cookies.get("accessToken");

  // Check if the current path is protected
  if (protectedRoutes.includes(request.nextUrl.pathname)) {
    // If the token is missing, redirect to the login page
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // Check for dynamic user routes
  if (request.nextUrl.pathname.startsWith("/users/")) {
    // If the token is missing, redirect to the login page
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // Continue with the request
  return NextResponse.next();
}

// Specify which routes this middleware should apply to
export const config = {
  matcher: protectedRoutes, // Apply middleware to these routes, including dynamic user routes
};
