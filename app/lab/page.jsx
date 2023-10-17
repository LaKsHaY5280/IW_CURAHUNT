import { Doctor, Group33 } from "@/assets";
import LeftSidebar from "@/components/Sidebar";
import { BadgeIndianRupee, Star, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  CeeDee,
  DrLalPathlabs,
  DrLalPathlabs2,
  labhunt,
  MaxLab,
  MyLab,
  RedcliffeLabs,
  ShikhaPathLab,
} from "@/assets";

const lab_info = [
  {
    name: "Shikha Path Lab",
    image: ShikhaPathLab,
    Address: "9207/5 , Near Punjab National Bank, Pahar Gunj, Delhi, 110055",
    Hours: "09:00 AM - 07:00 PM",
    Phone: "099717 67855",
    Rating: "4.3",
  },
  {
    name: "Redcliffe Labs - Collection Center",
    image: RedcliffeLabs,
    Address:
      "No 14/3636, near Punjab National Bank, Reghar Pura, Block 3H, Krishna Nagar, Karol Bagh, New Delhi, Delhi, 110005",
    Hours: "07:00 AM - 08:00 PM",
    Phone: "079 6914 4361",
    Rating: "4.2",
  },
  {
    name: "Max Lab West Patel Nagar",
    image: MaxLab,
    Address:
      "5,768/33 First Floor, Patel Rd, opposite Metro Pillar No.230, West Patel Nagar, New Delhi, Delhi 110008",
    Hours: "07:30 AM - 07:00 PM ",
    Phone: "081782 77422",
    Rating: "4.1",
  },
  {
    name: "Labhunt",
    image: labhunt,
    Address:
      "House No. 199, 10, near Metro Pillar No 120, Partap Nagar, Delhi, 110017",
    Hours: "00:00 AM - 11:59 PM ",
    Phone: "099996 11820",
    Rating: "4.7",
  },
  {
    name: "My Lab Diagnostics & Imaging",
    image: MyLab,
    Address:
      "2241, Ground Floor, Rajguru Marg, Chuna Mandi, Paharganj, New Delhi, Delhi 110055",
    Hours: "09:00 AM - 08:00 PM ",
    Phone: "097119 11821",
    Rating: "4.5",
  },
  {
    name: "Dr Lal Pathlabs - Patient Service & Radiology Centre",
    image: DrLalPathlabs,
    Address:
      " 8, W Ave Rd, near Yes Bank, West Punjabi Bagh, Punjabi Bagh, New Delhi, Delhi, 110026",
    Hours: "09:00 AM - 08:00 PM ",
    Phone: "011 4988 5050",
    Rating: "4.6",
  },
  {
    name: "Cee Dee Diagnostics Pvt Ltd",
    image: CeeDee,
    Address: "RZ 88/J, Main Road, Palam Colony, Delhi - 110045.",
    Hours: "08:00 AM - 08:00 PM",
    Phone: "08105051357",
    Rating: "4.8",
  },
  {
    name: "Dr Lal Pathlabs",
    image: DrLalPathlabs2,
    Address:
      "Dr Lal Pathlabs Number 52/26 Ground Floor, Ramjas Road, Karol Bagh, Delhi - 110005",
    Hours: "08:00 AM - 08:00 PM",
    Phone: "07419873408",
    Rating: "4.9",
  },
];
const page = () => {
  return (
    <div className="searchbar_container">
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
          {lab_info.map((item, ind) => {
            return (
              <div key={ind} className="cardbox">
                <div className="main_profile">
                  <div>
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <span>
                      {item.name}{" "}
                      <span>
                        {" "}
                        <Star
                          size={20}
                          color="#0d4c46"
                          strokeWidth={2}
                          absoluteStrokeWidth
                        />{" "}
                        {item.Rating}
                      </span>
                    </span>
                    <span>{item.Address}</span>
                    <span>{item.Hours}</span>
                    <span>{item.Phone}</span>
                  </div>
                </div>{" "}
                <div />
                <div className="lower-section">
                  <Link href={`/hospitals/${item._id}`}>Veiw Profile</Link>
                  <button className="book-btn">
                    <Link href="#">Book Appointment</Link>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
