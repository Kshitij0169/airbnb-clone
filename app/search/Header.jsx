"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState, useRef } from "react";
import SearchBar from "./components/SearchBar";
import clsx from "clsx";
import { useClickAway } from "react-use";
import Image from "next/image";
import { motion } from "framer-motion";
import MobileNav from "./components/MobileNav";

export default function Header() {
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef(null);

  const toggleExpanded = () => {
    setIsExpanded((prevIsExpanded) => !prevIsExpanded);
  };

  useClickAway(ref, () => {
    if (isExpanded) {
      setIsExpanded(false);
    }
  });

  const headerContainerClasses = clsx(
    "conatiner",
    "mx-auto",
    "flex",
    "justify-content",
    "bg-white",
    "py-8",
    "z-50",
    {
      "h-[7.5rem]": !isExpanded,
      "h-[13rem]": isExpanded,
    }
  );

  const searchContainerClasses = clsx(
    "search-container",
    "flex",
    "flex-row",
    "h-12",
    "rounded-full",
    "p-4",
    "justify-content-between",
    "items-center",
    "border",
    "drop-shadow-md",
    "bg-white",
    "w-auto",
    "self-center",
    "mx-auto",
    "z-30",
    {
      "border-b-0": !isExpanded,
      "border-b-8": isExpanded,
    }
  );

  const userIconClasses = clsx("text-slate-600 flex", "", {
    "items-center": !isExpanded,
    "items-start": isExpanded,
  });

  const modalClasses = clsx(
    "absolute",
    "top-0",
    "left-0",
    "w-full",
    "h-full",
    "z-40",
    "bg-black",
    "bg-opacity-50",
    "transition-opacity duration-300 ease-in-out",
    {
      hidden: !isExpanded,
      block: isExpanded,
      "opacity-0": !isExpanded,
      "opacity-100": isExpanded,
    }
  );

  const searchContainerVariants = {
    initial: {
      opacity: 1,
      height: "auto",
      y: 0,
      scale: 1,
    },
    hidden: {
      opacity: 0,
      height: 0,
      y: 100,
      scale: 2,
    },
    enter: {
      opacity: 1,
      height: "auto",
      y: 0,
      scale: 1,
    },
  };

  const tabVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      y: -100,
      scale: 0,
    },
    enter: {
      opacity: 1,
      height: "auto",
      y: 0,
      scale: 1,
    },
    exit: {
      opacity: 0,
      height: 0,
      y: -100,
      scale: 0,
    },
  };

  return (
    <>
      <header
        ref={ref}
        className="flex items-stretch border-b bg-white z-50 fixed h-23 w-full"
      >
        <div className={headerContainerClasses}>
          <div className=" text-red-500 mt-0 hidden md:flex">
            <Image src="/images/logo.png" height={45} width={165} alt="Logo" />
          </div>
          <div className="hidden md:flex flex-col grow">
            <motion.div
              className="flex flex-col justify-center"
              variants={tabVariants}
              initial="hidden"
              animate={isExpanded ? "enter" : "hidden"}
              exit="exit"
              transition={{ type: "linear" }}
            >
              <SearchBar toggleExpanded={toggleExpanded} />
            </motion.div>
            <motion.button
              initial="initial"
              animate={isExpanded ? "hidden" : "initial"}
              exit="hidden"
              transition={{ type: "linear" }}
              variants={searchContainerVariants}
              onClick={toggleExpanded}
              className={searchContainerClasses}
            >
              <div className="input flex border-r items-center px-4 h-10">
                <p>Anywhere</p>
              </div>
              <div className="input flex border-r items-center px-4 h-10">
                <p>Any Date</p>
              </div>
              <div className="input flex border-r items-center px-4 h-10">
                <p>Add Guests</p>
              </div>
              <div className="search-btn px-4 rounded-full bg-primary h-9 w-9 relative">
                <MagnifyingGlassIcon className="h-5 w-5 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
            </motion.button>
          </div>
          {/* Mobile Navigation */}
          <div className="md:hidden flex grow">
            <MobileNav />
          </div>
          <div className={userIconClasses}>
            <Image src="/images/user.svg" height={30} width={30} alt="User" />
          </div>
        </div>
      </header>
      <div className={modalClasses}></div>
    </>
  );
}
