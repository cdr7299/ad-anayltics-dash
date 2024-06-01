import { Variants } from "framer-motion";

const heroTextVariants: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.5,
      delay: 0,
      duration: 0.6,
      ease: "easeOut",
    },
  },
  hidden: { opacity: 0, y: 200 },
};

const buttonVariants: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
  hidden: { y: 100, opacity: 0 },
};

export { heroTextVariants, buttonVariants };
