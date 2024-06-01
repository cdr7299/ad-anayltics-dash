import Button from "../ui/button";
import NavLinks from "./components/nav-links";
import Image from "next/image";
const Navbar = () => {
  return (
    <>
      <nav className="flex w-full justify-between items-center px-4 py-2 border-b-[1px] border-[#aaa] text-primary-foreground backdrop-blur-3xl">
        <Image height={100} width={150} src="/brand.svg" alt="brand" />
        <NavLinks />
        <Button className="">Login</Button>
      </nav>
    </>
  );
};

export default Navbar;
