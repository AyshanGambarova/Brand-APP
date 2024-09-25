"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar() {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/home" },
    { name: "Users", href: "/users" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">Brand</div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
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
        </ul>
      </div>
    </header>
  );
}
