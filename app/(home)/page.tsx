"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Button from "@/components/ui/button";
import { adClient } from '@/adConfig'
import { buttonVariants, heroTextVariants } from "./home.animations";

export default function Home() {
  useEffect(() => {
    adClient.showBannerAd({
      adUnitId : '92da3950-e61a-4a5b-a524-5385dfc765b4',
      containerId: 'testForAd'
    })

  },[])
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={heroTextVariants}
        className="flex w-full flex-col items-center justify-center gap-8"
      >
        <h1 className="px-1 text-center text-4xl font-bold">
          {`Welcome to`}
          <span className="ml-2 text-primary">Advertiser Analytics</span>
        </h1>
        <motion.div variants={buttonVariants} className="w-fit">
          <Button
            aria-label="Navigate To Analytics Page"
            onClick={() => router.push("/analytics")}
          >
            Go to Analytics Home
          </Button>
        </motion.div>
      </motion.div>
      <div id="testForAd" className="absolute bottom-20"></div>
    </div>
  );
}
