"use client";
import { useUserContext } from "@/context/userContext"; // Adjust the path as needed
import { Logout } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Avatar,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import Cookies from "js-cookie";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathName = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const { user } = useUserContext(); // Access user from context

  const navLinks = [
    { name: "Home", href: "/home" },
    { name: "Users", href: "/users" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    Cookies.remove("accessToken");
    router.push("/login");
  };

  return (
    <header className="bg-blue-1 text-white p-4">
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
                    isActive ? "font-bold" : ""
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
        <div className="hidden md:block">
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar
                sx={{ width: 32, height: 32 }}
                src={user?.image} // Use user image from context
                alt={`${user?.firstName} ${user?.lastName}`}
                className="bg-blue-4 text-white"
              >
                {!user?.image && "M"} {/* Fallback if no image */}
              </Avatar>
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            slotProps={{
              paper: {
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&::before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleClose}>
              <Avatar /> Profile
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
              <button className="flex items-center" onClick={handleLogout}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </button>
            </MenuItem>
          </Menu>
        </div>
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
                  pathName.startsWith(link.href) ? "font-bold" : ""
                } block py-2`}
                href={link.href}
                onClick={() => setIsOpen(false)} // Close dropdown on link click
              >
                {link.name}
              </Link>
            </li>
          ))}

          {/* Add Profile Link in Mobile Menu */}
          <li>
            <Link
              className={`block py-2`}
              href="/profile"
              onClick={() => setIsOpen(false)} // Close dropdown on link click
            >
              Profile
            </Link>
          </li>

          {/* Add Logout Link in Mobile Menu */}
          <li>
            <button
              className="block py-2 text-left w-full"
              onClick={handleLogout}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
