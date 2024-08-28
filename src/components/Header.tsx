import React from "react";
import { Button } from "./ui/button";
// import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ModeToggle";
//
const Header = () => {
  return (
    <header className=" body-font">
      <div className="container mx-auto flex dark:bg-black dark:text-white flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center  mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 text-white p-2 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Tailblocks</span>
        </a>
        <nav className="md:ml-auto mx-5 flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">First Link</a>
          <a className="mr-5 hover:text-gray-900">Second Link</a>
          <a className="mr-5 hover:text-gray-900">Third Link</a>
          <a className="mr-5 hover:text-gray-900">Fourth Link</a>
        </nav>
        <div className=" flex justify-center items-center gap-5">
          <Button asChild>
            <div className=" cursor-pointer"> Get Qoute </div>
          </Button>

          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
