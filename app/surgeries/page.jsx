"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  acls,
  ampu,
  anal,
  arth,
  cata,
  cerv,
  colo,
  endo,
  gall,
  gyna,
  her,
  ingrow,
  kidney,
  lapa,
  lisik,
  lipo,
  piles,
  pilo,
  seb,
  vari,
} from "@/assets/index";

const surgeryImgLinks = [
  {
    name: "ACL Surgery",
    link: acls,
  },
  {
    name: "Amputation",
    link: ampu,
  },
  {
    name: "Anal Fissure",
    link: anal,
  },
  {
    name: "Arthroscopy",
    link: arth,
  },
  {
    name: "Cataract",
    link: cata,
  },
  {
    name: "Cervical",
    link: cerv,
  },
  {
    name: "Colostomy",
    link: colo,
  },
  {
    name: "Endoscopic",
    link: endo,
  },
  {
    name: "Gallstone",
    link: gall,
  },
  {
    name: "Gynaecomastia",
    link: gyna,
  },
  {
    name: "Hermia",
    link: her,
  },
  {
    name: "Ingrow Toenail",
    link: ingrow,
  },
  {
    name: "Kidney Stone",
    link: kidney,
  },
  {
    name: "Laparotomy",
    link: lapa,
  },
  {
    name: "Lasik",
    link: lisik,
  },
  {
    name: "Lipoma",
    link: lipo,
  },
  {
    name: "Piles",
    link: piles,
  },
  {
    name: "Pilonodal",
    link: pilo,
  },
  {
    name: "Sebaceous",
    link: seb,
  },
  {
    name: "Varicose Vein",
    link: vari,
  },
];

export default function SurgeryList() {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImgIndex((prevIndex) => {
        return prevIndex === surgeryImgLinks.length - 1 ? 0 : prevIndex + 1;
      });
    }, 6000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="surgery-list">
      <div className="surgery-list-heading">
        <span>Surgery list</span>
      </div>
      <div className="surgery-img" id="surgery-list">
        {surgeryImgLinks.map((item, index) => (
          <div
            key={item.name}
            className={`surgery_image ${index === imgIndex ? "active" : ""}`}
          >
            <Image src={item.link} alt={item.name} width={120} height={120} />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
