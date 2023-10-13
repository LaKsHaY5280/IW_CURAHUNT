import { doctors, hospital } from "@/assets";
import { MapPin } from "lucide-react";
import Image from "next/image";

const Header = () => {
  return (
    <div className=" header">
      <div className=" search ">
        <div>
          <Image src={doctors} alt=" doctors" width={200} height={200} />
        </div>
        <div className=" search_container">
          <h1>"Find the best Doctors and Hospitals"</h1>
          <div>
            <div className=" map">
              <MapPin
                size={40}
                color="#ffffff"
                strokeWidth={3}
                absoluteStrokeWidth
              />
              <div>
                <h4>Nearby Locality</h4>
                <h4>Select Address</h4>
              </div>
            </div>
            <div>
              <input
                type="text"
                id="searchbar"
                name="searchbar"
                placeholder="Search your need"
              />
            </div>
          </div>
        </div>
        <div>
          <Image src={hospital} alt=" doctors" width={200} height={200} />
        </div>
      </div>
    </div>
  );
};

export default Header;
