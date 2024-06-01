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
  hidden: { opacity: 0, y: 100 },
};

export { heroTextVariants };
