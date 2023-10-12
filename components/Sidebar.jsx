"use client";

import { sidebarLinks, sidebarLinksd, navlinks } from "@/assets/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const LeftSidebar = ({ path }) => {
  const pathname = usePathname();
  const [currentContent, setCurrentContent] = useState("overview");

  const handleClick = (content) => {
    setCurrentContent(content);
  };

  return (
    <section className="leftsidebar">
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        {path === "h" &&
          sidebarLinks.map((link) => {
            return (
              <Link
                href={link.route}
                key={link.label}
                onClick={() => handleClick(link.label)}
                className={
                  currentContent === link.label
                    ? " leftsidebar_link active"
                    : " leftsidebar_link"
                }
              >
                <p className="text-light-1 max-md:hidden">{link.label}</p>
              </Link>
            );
          })}
        {path === "d" &&
          sidebarLinksd.map((link) => {
            return (
              <Link
                href={link.route}
                key={link.label}
                onClick={() => handleClick(link.label)}
                className={
                  currentContent === link.label
                    ? " leftsidebar_link active"
                    : " leftsidebar_link"
                }
              >
                <p className="text-light-1 max-md:hidden">{link.label}</p>
              </Link>
            );
          })}
        {path === "dl" && (
          <div className="filters">
            <span>Filter</span>
            <div className="filter">
              <div className="rating-filter">
                <span>Rating</span>
                <select name="" id="">
                  <option value="">Select rating range</option>
                  <option value="">5-4</option>
                  <option value="">4-3</option>
                  <option value="">3-2</option>
                  <option value="">2-1</option>
                </select>
              </div>
              <div className="price-filter">
                <span>Price</span>
                <select name="" id="">
                  <option value="">Select Price range</option>
                  <option value="">High-low</option>
                  <option value="">Low-High</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LeftSidebar;
