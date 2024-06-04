"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathName = usePathname();

  return (
    <ul className="flex items-center justify-center gap-2 rounded-md px-2 py-1 text-sm font-semibold md:px-8">
      <li>
        <Link
          href="/"
          className={`rounded-md px-4 py-2 underline-offset-4 transition duration-500 hover:bg-red-400/60 ${
            pathName === "/" ? "bg-red-500/30" : ""
          }`}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/analytics"
          className={`rounded-md px-4 py-2 underline-offset-4 transition duration-500 hover:bg-red-400/60 ${
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
