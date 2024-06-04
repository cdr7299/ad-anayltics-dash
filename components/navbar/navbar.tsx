import Image from "next/image";
import NavLinks from "./components/nav-links";
import Button from "../ui/button";
import ThemeToggle from "../theme-toggle";
const Navbar = () => (
  <>
    <nav className="text-primary-foreground flex w-full items-center justify-center bg-inherit px-4 py-2 shadow-md backdrop-blur-3xl md:justify-between">
      <Image
        className="hidden md:block"
        height={100}
        width={150}
        src="/brand.svg"
        alt="brand"
      />
      <NavLinks />
      <Button disabled className="invisible hidden w-[150px] md:block">
        Login
      </Button>
      <ThemeToggle />
    </nav>
  </>
);

export default Navbar;
