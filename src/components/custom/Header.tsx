"use client";
import { VideoIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <header className="w-full  py-4 px-4 sm:px-6 lg:px-8 bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center  font-poppins text-lg">
        <Link className="flex items-center  flex-1  " href="/">
          <VideoIcon className=" w-6 h-6 text-blue-600" />
          <span className="ml-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% max-sm:text-lg">
            GuidanceConnect
          </span>
        </Link>

        <nav className="hidden lg:flex justify-center   space-x-4 ">
          <Link href="#about" className="text-gray-600 hover:text-gray-900">
            About
          </Link>
          <Link href="#bootcamps" className="text-gray-600 hover:text-gray-900">
            Bootcamps
          </Link>
          <Link href="#benefits" className="text-gray-600 hover:text-gray-900">
            Benefits
          </Link>
          <Link href="#contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </Link>
        </nav>
        <SignedOut>
          <div className="space-x-4  flex-1 text-right">
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-500  max-sm:text-xs ">
              <Link href="/sign-in">Login</Link>
            </Button>
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 max-sm:text-xs">
              <Link href="/sign-up">Register</Link>
            </Button>
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
};

export default Header;
