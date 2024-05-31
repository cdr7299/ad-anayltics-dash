import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center px-4 py-4 border-b-[1px] border-[#aaa] text-primary-foreground backdrop-blur-3xl">
        <div className="flex-grow">
          <ul className="flex gap-4 items-center justify-center">
            <Link href="/">Home</Link>
            <Link href="/analytics">Analytics</Link>
          </ul>
        </div>
        <div className="flex items-center"></div>
      </nav>
    </>
  );
};

export default Navbar;
