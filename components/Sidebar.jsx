"use client";

import { sidebarLinks, sidebarLinksd, navlinks } from "@/assets/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LeftSidebar = ({ path }) => {
  const pathname = usePathname();

  return (
    <section className="custom-scrollbar leftsidebar">
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        {path === "h" &&
          sidebarLinks.map((link) => {
            const isActive =
              (pathname.includes(link.route) && link.route.length > 1) ||
              pathname === link.route;

            return (
              <Link
                href={link.route}
                key={link.label}
                className={`leftsidebar_link ${isActive && "bg-teal-900 "}`}
              >
                <p className="text-light-1 max-md:hidden">{link.label}</p>
              </Link>
            );
          })}
        {path === "d" &&
          sidebarLinksd.map((link) => {
            const isActive =
              (pathname.includes(link.route) && link.route.length > 1) ||
              pathname === link.route;

            return (
              <Link
                href={link.route}
                key={link.label}
                className={`leftsidebar_link ${isActive && "bg-teal-900 "}`}
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
              option
              <div className="price-filter">
                <span>Price</span>
                <select name="" id="">
                  <option value="">Select Price range</option>
                  <option value="">High-low</option>
                  <option value="">Low-High</option>
                </select>
              </div>
              <div className="Experience-filter">
                <span>Experience </span>
                <select name="" id="">
                  <option value="">Select Experience level</option>
                  <option value="">0-1</option>
                  <option value="">2-4</option>
                  <option value="">4-5</option>
                  <option value="">more</option>
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
