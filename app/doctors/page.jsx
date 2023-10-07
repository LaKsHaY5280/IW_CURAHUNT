"use client";

import { useState, useEffect } from "react";
import { Doctor, Group33, doctor1 } from "@/assets";
import LeftSidebar from "@/components/Sidebar";
import { ShieldCheck, SlidersHorizontal, X } from "lucide-react";
import Image from "next/image";
import { getAllDoctorData } from "@/lib/actions/Doctors.actions";
import Link from "next/link";

const page = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllDoctorData();
      setDoctors(data);
      console.log(data);
    };

    fetchData();
  }, []);
  return (
    <div className="searchbar_container">
      <LeftSidebar path="dl" />
      <div className=" cardholder">
        <section className=" search-section">
          <div>
            <Image src={Doctor} alt="Doctor" height={144} />
          </div>
          <div>
            <div className="search-bar">
              <SlidersHorizontal
                size={35}
                color="#0d4c46"
                strokeWidth={2}
                absoluteStrokeWidth
              />
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
            <button className="search-btn">Search</button>
          </div>
          <div>
            <Image src={Group33} alt="Group33" height={144} />
          </div>
        </section>
        <div className="cardsplace">
          {doctors.map((item) => {
            return (
              <Link
                key={item._id}
                href={`/doctors/${item._id}`}
                className=" doctor-cards"
              >
                <div className="main-card">
                  <div className="upper-section">
                    <div className="doctor-pic">
                      <div className="doctor-img">
                        <Image
                          src={item.p_img}
                          alt={item.name}
                          width={200}
                          height={150}
                        />
                      </div>
                      <div className="doctor-verify">
                        {item.Cverified === true && (
                          <ShieldCheck
                            size={20}
                            color="#0d4c46"
                            strokeWidth={2}
                            absoluteStrokeWidth
                          />
                        )}
                      </div>
                    </div>

                    <div className="doctor-detail">
                      <h2>{item.name}</h2>
                      <div className="detail">
                        <span>{item.deg}</span>
                        <div class="address">
                          <p>{item.spec}</p>
                        </div>
                        <div class="fees">
                          <p>{item.exp}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hr-">
                    <hr />
                  </div>
                  <div className="lower-section">
                    <Link href="/">Veiw Profile</Link>
                    <button className="book-btn">
                      <Link href="/">Book Appointment</Link>
                    </button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
