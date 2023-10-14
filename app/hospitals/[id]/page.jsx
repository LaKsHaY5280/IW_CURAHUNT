"use client";

import LeftSidebar from "@/components/Sidebar";
import { getHospitalData } from "@/lib/actions/Hospitals.action";
import Image from "next/image";
// import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Star } from "lucide-react";
import Infocard from "@/components/Infocard";
import Loader from "@/components/Loader";

const page = ({ data }) => {
  // const router = useRouter();

  const pathname = usePathname();

  // console.log(pathname);

  const id = pathname.replace("/hospitals/", "");
  // console.log(id);
  const [hospitalData, setHospitalData] = useState(null);

  useEffect(() => {
    if (id) {
      getHospitalData(id).then((data) => setHospitalData(data));
    }
  }, [id]);

  const [currentContent, setCurrentContent] = useState("About");

  const handleClick = (content) => {
    setCurrentContent(content);
  };

  return (
    <div className="hospital_profile">
      <LeftSidebar path="h" />
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
                  <span>
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
                <span>{hospitalData.address}</span>
                <span>{hospitalData.time}</span>
                <span>{hospitalData.fees}</span>
              </div>
            </>
          ) : (
            <Loader />
          )}
        </div>
        <div className="h_p_nav" id="overview">
          <ul>
            <li
              onClick={() => handleClick("About")}
              className={currentContent === "About" ? "active" : ""}
            >
              <div>About</div>
            </li>
            <li
              onClick={() => handleClick("Payment")}
              className={currentContent === "Payment" ? "active" : ""}
            >
              <div>Payment</div>
            </li>
            <li
              onClick={() => handleClick("Photos")}
              className={currentContent === "Photos" ? "active" : ""}
            >
              <div>Photos</div>
            </li>
            <li
              onClick={() => handleClick("Emergency")}
              className={currentContent === "Emergency" ? "active" : ""}
            >
              <div>Emergency</div>
            </li>
          </ul>
          {currentContent === "About" && <div>{hospitalData?.about}</div>}
          {currentContent === "Payment" && (
            <div className=" text-2xl">{hospitalData?.pay}</div>
          )}
          {currentContent === "Photos" && (
            <div className="gal">
              {hospitalData ? (
                hospitalData.g_img?.map((val, index) => {
                  return (
                    <div key={index}>
                      <Image src={val} alt="profile" width={100} height={100} />
                    </div>
                  );
                })
              ) : (
                <p>Loading...</p>
              )}
            </div>
          )}
          {currentContent === "Emergency" && (
            <div className=" text-2xl">{hospitalData?.em_num}</div>
          )}
        </div>

        <div id="surgeries">
          <Infocard title="Surgeries" data={hospitalData?.surgery} />
        </div>
        <Infocard title="Speciality" data={hospitalData?.tags} />
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
        <div id="doctors"></div>
        <div id="services">
          <Infocard title="Services" data={hospitalData?.services} />
        </div>
        <div id="amenities">
          <Infocard title="Amenities" data={hospitalData?.amenities} />
        </div>
      </div>
    </div>
  );
};

export default page;
