"use client";

import { useState, useEffect } from "react";
import { Doctor, Group33 } from "@/assets";
import LeftSidebar from "@/components/Sidebar";
import { BadgeIndianRupee, ShieldCheck, Star, X } from "lucide-react";
import Image from "next/image";
import { getAllDoctorData } from "@/lib/actions/Doctors.actions";
import Link from "next/link";
import Loader from "@/components/Loader";

const page = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getAllDoctorData();
      setDoctors(data);
      setLoading(false);
    };

    fetchData();
  }, []);
  return (
    <div className="searchbar_container">
      {loading ? (
        <Loader />
      ) : (
        <>
          <LeftSidebar path="dl" />
          <div className=" cardholder">
            <section className=" search-section">
              <div>
                <Image src={Doctor} alt="Doctor" height={144} />
              </div>
              <div className="search_container">
                <div className="search-bar">
                  <div>
                    <span className="search-bar1">
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="search Hospital"
                      />
                      <X
                        size={35}
                        color="#0d4c46"
                        strokeWidth={2}
                        absoluteStrokeWidth
                      />
                    </span>
                    <span className="search-bar2">
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="search Location"
                      />
                      <X
                        size={35}
                        color="#0d4c46"
                        strokeWidth={2}
                        absoluteStrokeWidth
                      />
                    </span>
                  </div>
                  <div className="search-btn_box">
                    <BadgeIndianRupee
                      size={35}
                      color="#0d4c46"
                      strokeWidth={2}
                      absoluteStrokeWidth
                    />
                    <button className="search-btn">Search</button>{" "}
                    <Star
                      size={35}
                      color="#0d4c46"
                      strokeWidth={2}
                      absoluteStrokeWidth
                    />
                  </div>
                </div>
              </div>
              <div>
                <Image src={Group33} alt="Group33" height={144} />
              </div>
            </section>
            <div className="cardsplace">
              {doctors.map((item, ind) => {
                return (
                  <div key={ind} className="cardbox">
                    <div className="main_profile">
                      <div>
                        <Image
                          src={item.p_img}
                          alt={item.name}
                          width={100}
                          height={100}
                        />
                      </div>
                      <div>
                        <span>
                          {item.name}{" "}
                          {item.Cverified === true && (
                            <ShieldCheck
                              size={20}
                              color="#0d4c46"
                              strokeWidth={2}
                              absoluteStrokeWidth
                            />
                          )}
                          <span className="flex justify-center items-center gap-3 px-5">
                            {" "}
                            <Star
                              size={20}
                              color="#0d4c46"
                              strokeWidth={2}
                              absoluteStrokeWidth
                            />{" "}
                            {item.rating}
                          </span>
                        </span>
                        <span>{item.deg}</span>
                        <span>{item.spec}</span>
                        <span>{item.exp}</span>
                      </div>
                    </div>{" "}
                    <div />
                    <div className="lower-section">
                      <Link href={`/doctors/${item._id}`}>Veiw Profile</Link>
                      <button className="book-btn">
                        <Link href="#">Book Appointment</Link>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default page;
