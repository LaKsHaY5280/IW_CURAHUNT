import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import FooterOverlay from "@/components/FooterOverlay";
import Newsletter from "@/components/Newsletter";
import Image from "next/image";
import { doctor1 } from "@/assets";
import Link from "next/link";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">
          <Link href="https://www.linkedin.com/in/faisal-mujahid-745168273/">
            Faisal Mujahid - LinkedIn
          </Link>
        </p>
        <p className="p__opensans">
          <Link href="https://www.linkedin.com/in/lakshay-goyal-2a03a4270/">
            Lakshay Goyal - LinkedIn
          </Link>
        </p>
        <p className="p__opensans">
          <Link href="https://www.linkedin.com/in/manishgupta31/">
            Manish Gupta - LinkedIn
          </Link>
        </p>
        <p className="p__opensans">
          <Link href="https://www.linkedin.com/in/viraj-ansari-114627247/">
            Viraj - LinkedIn
          </Link>
        </p>
        <p className="p__opensans">
          <Link href="https://www.linkedin.com/in/sneha-a50163255/">
            Sneha - LinkedIn
          </Link>
        </p>
        <p className="p__opensans">
          <Link href="/about">About Us</Link>
        </p>
        <p className="p__opensans">
          <Link href="/policy">Privacy Policy</Link>
        </p>
      </div>
      <div className="app__footer-links_logo">
        <p className="p__opensans">
          &quot;Where Healthcare and Knowledge Come Together&quot;
        </p>
        <div className="app__footer-links_icons flex justify-center items-center">
          <Link href={"https://instagram.com/curahunt?igshid=MzMyNGUyNmU2YQ=="}>
            <FiInstagram />
          </Link>
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Partners</h1>
        <p className="p__opensans">Cura Hospital</p>
        <p className="p__opensans">DH Labs</p>
        <p className="p__opensans">Cura Foundation</p>
        <p className="p__opensans">CuraHunt medical</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2023 CuraHunt. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
