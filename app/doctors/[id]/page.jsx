"use client";

import LeftSidebar from "@/components/Sidebar";

import Image from "next/image";
// import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ShieldCheck, Star } from "lucide-react";
import Infocard from "@/components/Infocard";
import { getDoctorData } from "@/lib/actions/Doctors.actions";
import Loader from "@/components/Loader";

const page = ({ data }) => {
  // const router = useRouter();

  const pathname = usePathname();

  // console.log(pathname);

  const id = pathname.replace("/doctors/", "");
  //   console.log(id);
  const [hospitalData, setHospitalData] = useState(null);

  useEffect(() => {
    if (id) {
      getDoctorData(id).then((data) => setHospitalData(data));
    }
  }, [id]);

  const [currentContent, setCurrentContent] = useState("About");

  const handleClick = (content) => {
    setCurrentContent(content);
  };

  return (
    <div className="hospital_profile">
      <LeftSidebar path="d" />
      <div className="hospital_container">
        <div className="main_profile">
          {hospitalData ? (
            <>
              <div>
                <Image
                  src={hospitalData.p_img}
                  alt={hospitalData.name}
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <span>
                  {hospitalData.name}{" "}
                  {hospitalData.Cverified === true && (
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
                    {hospitalData.rating}
                  </span>
                </span>
                <span>{hospitalData.deg}</span>
                <span>{hospitalData.spec}</span>
                <span>{hospitalData.exp}</span>
              </div>
            </>
          ) : (
            <Loader />
          )}
        </div>
        <div className="h_p_nav" id="overview">
          <div className=" flex">
            <ul className=" w-fit flex justify-start items-center ">
              <li onClick={() => handleClick("About")}>
                <div>About</div>
              </li>
              <li onClick={() => handleClick("fees")}>
                <div>Fees</div>
              </li>
              <li onClick={() => handleClick("working")}>
                <div>Working Hours</div>
              </li>
              <li onClick={() => handleClick("address")}>
                <div>Address</div>
              </li>
            </ul>
          </div>
          {currentContent === "About" && <div>{hospitalData?.About}</div>}
          {currentContent === "fees" && (
            <div className=" text-2xl">{hospitalData?.fees}</div>
          )}
          {currentContent === "working" && (
            <div className="gal">
              {hospitalData ? (
                hospitalData.apt?.map((val, index) => {
                  return (
                    <div key={index} className=" text-2xl">
                      {/* {val} */}
                    </div>
                  );
                })
              ) : (
                <p>Loading...</p>
              )}
            </div>
          )}
          {currentContent === "address" && (
            <div className=" text-2xl py-2">
              {hospitalData?.practice}
              {hospitalData?.add}
            </div>
          )}
        </div>
        <div id="surgeries">
          <Infocard title="Surgeries" data={hospitalData?.surgey} />
        </div>
        <div id="reviews">
          {hospitalData ? (
            hospitalData.review?.map((val, index) => {
              return (
                <div key={index} className="reviewcard">
                  <div>
                    <div>
                      <span>Name:</span>
                      <span>Subject:</span>
                      <span>Review:</span>
                    </div>
                    <div>
                      <span>{val?.name} </span>
                      <span>{val?.subject}</span>
                      <span>{val?.review}</span>
                    </div>
                  </div>
                  <div />
                </div>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
          <div>
            <div>Share Your experience</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
