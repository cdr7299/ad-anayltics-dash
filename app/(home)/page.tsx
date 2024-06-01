"use client";
import Button from "@/components/ui/button";
import { heroTextVariants } from "./home.animations";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={heroTextVariants}
        className="flex w-full gap-8 flex-col"
      >
        <h1 className="text-4xl text-center font-bold">
          {`Welcome to`}
          <span className="text-primary ml-2">Advertiser Analytics</span>
        </h1>
        <Button onClick={() => router.push("/analytics")}>
          Go to Analytics Home
        </Button>
      </motion.div>
    </div>
  );
}