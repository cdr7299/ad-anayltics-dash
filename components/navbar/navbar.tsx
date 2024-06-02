import Image from "next/image";
import NavLinks from "./components/nav-links";
import Button from "../ui/button";
import ThemeToggle from "../theme-toggle";
const Navbar = () => (
  <>
    <nav className="flex w-full justify-center md:justify-between bg-inherit  items-center px-4 py-2 shadow-md  text-primary-foreground backdrop-blur-3xl">
      <Image
        className="hidden md:block"
        height={100}
        width={150}
        src="/brand.svg"
        alt="brand"
      />
      <NavLinks />
      <Button disabled className="w-[150px] invisible hidden md:block">
        Login
      </Button>
      <ThemeToggle />
    </nav>
  </>
);

export default Navbar;
