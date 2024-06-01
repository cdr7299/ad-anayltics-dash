"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathName = usePathname();

  return (
    <ul className="flex gap-4 items-center justify-center text-base font-semibold bg-slate-300 border-slate-400/20 border-2 py-1 rounded-lg px-8">
      <Link
        href="/"
        className={`px-4 py-2 rounded-md hover:bg-red-400/60 transition duration-500 underline-offset-4 ${
          pathName === "/" ? "underline" : ""
        }`}
      >
        Home
      </Link>
      <Link
        href="/analytics"
        className={`px-4 py-2 rounded-md hover:bg-red-400/60 transition duration-500 underline-offset-4 ${
          pathName === "/analytics" ? "underline" : ""
        }`}
      >
        Analytics
      </Link>
    </ul>
  );
};

export default NavLinks;
