"use client";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Cookies from "js-cookie"; // Import js-cookie for managing cookies
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathName = usePathname();
  const router = useRouter(); // Use router for navigation
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/home" },
    { name: "Users", href: "/users" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Clear accessToken from cookies
    Cookies.remove("accessToken");

    // Redirect to the login page
    router.push("/login");
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">Brand</div>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Desktop Links */}
        <ul className={`hidden md:flex flex-1 justify-center`}>
          {navLinks.map((link) => {
            const isActive = pathName.startsWith(link.href);
            return (
              <li key={link.name}>
                <Link
                  className={`${
                    isActive && "font-bold"
                  } block md:inline-block mx-4 py-2`}
                  href={link.href}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="ml-4 bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden ${isOpen ? "block" : "hidden"} bg-gray-700 p-4`}
      >
        <ul>
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                className={`${
                  pathName.startsWith(link.href) && "font-bold"
                } block py-2`}
                href={link.href}
                onClick={() => setIsOpen(false)} // Close dropdown on link click
              >
                {link.name}
              </Link>
            </li>
          ))}

          {/* Logout Button in Mobile Menu */}
          <li>
            <button
              onClick={handleLogout}
              className="w-full text-left mt-4 bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
