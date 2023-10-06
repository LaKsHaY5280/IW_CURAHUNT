"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { getTopRankedHospitals } from "@/lib/actions/Hospitals.action";
import { getTopRankedDoctors } from "@/lib/actions/Doctors.actions";

const Topcard = ({ type }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let data;
      if (type === "hospital") {
        data = await getTopRankedHospitals();
      } else if (type === "doctor") {
        data = await getTopRankedDoctors();
      }
      setData(data);
    }
    fetchData();
  }, [type]);

  return (
    <>
      <h2>{type === "hospital" ? "Top Hospital" : "Top Doctor"}</h2>
      <div className="top">
        {data.map((item) => (
          <div key={item._id} className="topcard">
            <div>
              {/* <Image
                src={item.p_img}
                alt={item.name}
                width={100}
                height={100}
              /> */}
            </div>
            <div />
            <div>
              <span>{item.name}</span>
              {type === "hospital" ? (
                <>
                  <span>{item.loc}</span>
                  <span>{item.fees}</span>
                  <span>{item.Exp}</span>
                </>
              ) : (
                <>
                  <span>{item.spec}</span>
                  <span>{item.exp}</span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Topcard;
