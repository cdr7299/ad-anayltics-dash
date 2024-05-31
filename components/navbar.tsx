import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="flex w-full justify-center items-center px-4 py-4 border-b-[1px] border-[#aaa] text-primary-foreground backdrop-blur-3xl">
        <ul className="flex gap-4 items-center justify-center text-base font-semibold bg-slate-500/20 rounded-lg py-1 px-8">
          <Link
            href="/"
            className="px-4 py-1 rounded-md hover:bg-red-400/60 transition h-full"
          >
            Home
          </Link>
          <Link
            href="/analytics"
            className="px-4 py-1 rounded-md hover:bg-red-400/60 transition"
          >
            Analytics
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
