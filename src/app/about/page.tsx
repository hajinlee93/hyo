"use client";

import Image from "next/image";
import { AnimatePresence, Variants, motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import ProfileImage from "../../../public/images/profile.jpg";
import { sentence } from "../../../data/about/aboutData";
import useTypeword from "@/hooks/useTypeword";
import dynamic from "next/dynamic";

const SlotMachine = dynamic(() => import("@/components/about/SlotMachine"));
const AboutContent = dynamic(() => import("@/components/about/AboutContent"));
const ScrollDown = dynamic(() => import("@/components/common/ScrollDown"));

export default function AboutPage() {
  const [showInitialMessage, setShowInitialMessage] = useState(true);
  const controls = useAnimation();

  const onBoardText = useTypeword("웰컴투 효재 월드", 45);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setShowInitialMessage(false);
      controls.start("visible");
      document.body.style.overflow = "";
    }, 2700);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [controls]);

  useEffect(() => {
    if (!showInitialMessage) {
      controls.start("visible");
    }
  }, [showInitialMessage, controls]);

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
        staggerChildren: 0.7,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.7,
      },
    },
  };

  const messageItemVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 1.8,
      },
    },
  };

  return (
    <>
      <AnimatePresence>
        {showInitialMessage && (
          <motion.div
            className="flex flex-col justify-center items-center h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1 }}
          >
            <p className="text-xl text-center md:text-4xl font-ghanachocolate text-stone-800">
              {onBoardText}
            </p>
            <motion.span
              className="text-lg text-center sm:text-base md:text-xl font-scoreRegular mt-6 text-stone-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
            >
              서진교회 한빛 청년부 <span className="font-bold"> 효재목장</span>
              입니다.
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
      {!showInitialMessage && (
        <motion.section
          className="h-full"
          variants={sectionVariants}
          initial="hidden"
          animate={controls}
        >
          <div
            id="about"
            className="relative flex items-center gap-6 flex-col sm:flex-row md:flex-row pt-16 selection:bg-brown_color"
          >
            <motion.div
              className="flex flex-col w-full justify-center items-center basis-5/12"
              variants={itemVariants}
            >
              <motion.p
                className="my-1 text-3xl text-center md:text-5xl font-ghanachocolate absolute top-8 left-7 sm:top-10 sm:left-18 md:top-5 md:left-10 flex flex-col gap-1 md:gap-2 text-stone-800"
                variants={messageItemVariants}
              >
                <span>이효재 목장 슬로건</span>
                <span>힘써 알자</span>
              </motion.p>
              <div
                className="w-60 h-72 sm:h-80 md:w-[22rem] md:h-auto overflow-hidden block rounded-xl"
                onContextMenu={(e) => {
                  e.preventDefault();
                }}
              >
                <Image
                  src={ProfileImage}
                  alt="Picture of the author"
                  width={300}
                  height={400}
                  priority
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            </motion.div>
            <motion.div
              className="flex flex-col w-full md:w-2/3"
              variants={itemVariants}
            >
              <p className="font-dohyeon text-stone-600 text-lg md:text-2xl mb-8">
                About 효재 목장
              </p>
              <SlotMachine sentence={sentence} />
              <AboutContent />
              <p className="text-sm text-stone-500 mt-2">update。 2024.07.29</p>
            </motion.div>
          </div>
          <ScrollDown />
        </motion.section>
      )}
    </>
  );
}
