"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState, useRef } from "react";
import SearchBar from "./components/SearchBar";
import clsx from "clsx";
import { useClickAway } from "react-use";
import Image from "next/image";

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
    "mx-[550px]",
    {
      "border-b-0": !isExpanded,
      "border-b-8": isExpanded,
    }
  );

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

  return (
    <>
      <header
        ref={ref}
        className="flex items-stretch border-b bg-white z-50 fixed h-23 w-full"
      >
        <div className={headerContainerClasses}>
          <div className=" text-red-500 mt-0">
            <Image src="/images/logo.png" height={45} width={165} alt="Logo" />
          </div>
          {isExpanded ? (
            <SearchBar />
          ) : (
            <button onClick={toggleExpanded} className={searchContainerClasses}>
              <div className="input flex items-center border-r px-4 h-10">
                <p>Anywhere</p>
              </div>
              <div className="input flex items-center border-r px-4 h-10">
                <p>Any Date</p>
              </div>
              <div className="input flex items-center border-r px-4 h-10">
                <p>Add Guests</p>
              </div>
              <div className="search-btn px-4 rounded-full bg-primary h-9 w-9 relative">
                <MagnifyingGlassIcon className="h-5 w-5 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
            </button>
          )}
          <div className="w-8 h-8 mt-3">
            <Image src="/images/user.svg" height={30} width={30} alt="User" />
          </div>
        </div>
      </header>
      <div className={modalClasses}></div>
    </>
  );
}
