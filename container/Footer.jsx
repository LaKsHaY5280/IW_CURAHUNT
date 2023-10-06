import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import FooterOverlay from "@/components/FooterOverlay";
import Newsletter from "@/components/Newsletter";
import Image from "next/image";
import { doctor1 } from "@/assets";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Faisal Mujahid - +91 9667080672</p>
        <p className="p__opensans">Lakshay Goyal - +91 9910470485</p>
        <p className="p__opensans">Manish Gupta - +91 9205055941</p>
        <p className="p__opensans">Viraj Ansari - +91 7678419189</p>
        <p className="p__opensans">Sneha - +91 9625609632</p>
      </div>
      <div className="app__footer-links_logo">
        {/* <Image src={doctor1} alt="footer_logo" /> */}
        <p className="p__opensans">
          &quot;The best way to find yourself is to lose yourself in the service
          of others.&quot;
        </p>
        {/* <Image
          src={doctor1}
          alt="spoon"
          className="spoon"
          style={{ marginTop: 15 }}
        /> */}
        <div className="app__footer-links_icons flex justify-center items-center">
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Partners</h1>
        <p className="p__opensans">Max Hospital</p>
        <p className="p__opensans">DH Labs</p>
        <p className="p__opensans">Cura Foundation</p>
        <p className="p__opensans">CuraHunt medical</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2021 Gerícht. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
