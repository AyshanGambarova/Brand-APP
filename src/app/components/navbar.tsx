import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const pathName = usePathname();
  const navLinks = [
    { name: "Home", href: "/home" },
    { name: "Users", href: "/users" },
    { name: "Blogs", href: "/blogs" },
    { name: "Profile", href: "/profile" },
  ];
  return (
    <>
      <header className="bg-gray-800 text-white p-4">
        <ul className="flex justify-between items-center w-[400px]">
          {navLinks.map((link) => {
            const isActive = pathName.startsWith(link.href);
            return (
              <li key={link.name}>
                <Link
                  className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
                  href={link.href}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </header>
    </>
  );
}
