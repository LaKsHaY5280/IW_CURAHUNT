"use client";

import Image from "next/image";
import { navlinks } from "@/assets/data";
import Hamburger from "./hamburger";
import Link from "next/link";
import { logo } from "@/assets";
import { UserCircle } from "lucide-react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const handleImageClick = () => {
    router.push("/");
  };

  return (
    <div className=" navclass">
      <div className="  p-3 flex flex-1 justify-center items-center max-[500px]:p-2 ">
        <div className=" flex flex-1 justify-between items-center">
          <div className=" flex justify-start items-center">
            <Image
              src={logo}
              alt="Logo"
              width={110}
              height={110}
              onClick={handleImageClick}
              className=" -mt-2 cursor-pointer "
            />
          </div>
        </div>
        <div className=" px-4 flex justify-between items-center  ">
          <UserCircle
            size={35}
            color="#0d4c46"
            strokeWidth={2}
            absoluteStrokeWidth
          />
          <button className=" border-teal-500 border rounded-xl px-5 py-1 ml-2 bg-teal-800 text-slate-300">
            <Link href="/">Log in</Link>
          </button>
        </div>
        <div className=" flex justify-end items-center lg:hidden">
          <Hamburger />
        </div>
      </div>
      <div>
        <ul className=" hidden lg:flex justify-center items-center bg-teal-100">
          {navlinks.map((link) => (
            <li
              key={link.label}
              className=" text-slate-900 mx-5 p-2 font-bold"
            >
              <a href={link.url}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
