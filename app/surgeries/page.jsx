"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getSurgeryList } from "@/lib/actions/Surgeries.actions";

export default function SurgeryList() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getSurgeryList();
      setDoctors(data);
      // console.log(doctors);
      setLoading(false);
    };

    fetchData();
  }, []);

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="surgery-list">
      <div className="surgery-list-heading">
        <span>Surgery list</span>
      </div>
      <div className="surgery-contain" id="surgery-list">
        {doctors.map((item, index) => (
          <div
            key={index}
            className="mb-6 flex w-full flex-col items-center justify-between"
          >
            <div
              className={` flex w-fit items-center justify-between mx-5 py-4 bg-teal-600 text-white rounded-t-lg`}
            >
              <div className="surcard">
                <div>
                  <Image
                    src={item.p_img}
                    alt={item.name}
                    width={100}
                    height={100}
                  />
                  <div className="surline" />
                  <span>{item.name}</span>
                </div>
                <div>
                  <div>
                    <span className="font-bold m-2 ml-0 text-xl max-lg:text-lg max-md:text-sm max-sm:text-xs">
                      ABOUT
                    </span>
                    {item.about}
                    <span
                      onClick={() => handleClick(index)}
                      className=" cursor-pointer font-light underline text-teal-200 m-2 text-xl max-lg:text-lg max-md:text-sm max-sm:text-xs"
                    >
                      Know More!
                    </span>
                  </div>
                  <div>
                    <button className="vdbtn">View Doctors</button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={` h-full flex items-center justify-between mx-5 bg-teal-100 rounded-b-lg overflow-hidden transition-max-height duration-700 ease-in-out ${
                activeIndex === index ? "max-h-[99rem]" : "max-h-0"
              }`}
            >
              <div className="surd">
                <div className="surd_block">
                  <div>
                    <div>Recovery Time</div> <span className="surlinea" />
                  </div>
                  <div>
                    <div>{item.time}</div> <span className="surlineb" />
                  </div>
                </div>
                <div className="surd_block">
                  <div>
                    <div>Risk</div> <span className="surlinea" />
                  </div>
                  <div>
                    <div>{item.risk}</div> <span className="surlineb" />
                  </div>
                </div>
                <div className="surd_block">
                  <div>
                    <div>Average Cost</div> <span className="surlinea" />
                  </div>
                  <div>
                    <div>{item.cost}</div> <span className="surlineb" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
