"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathName = usePathname();

  return (
    <ul className="flex gap-2 items-center justify-center text-sm font-semibold py-1 rounded-md px-2 md:px-8">
      <li>
        <Link
          href="/"
          className={`px-4 py-2 rounded-md hover:bg-red-400/60 transition duration-500 underline-offset-4 ${
            pathName === "/" ? "bg-red-500/30" : ""
          }`}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/analytics"
          className={`px-4 py-2 rounded-md hover:bg-red-400/60 transition duration-500 underline-offset-4 ${
            pathName === "/analytics" ? "bg-red-400/60" : ""
          }`}
        >
          Analytics
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
