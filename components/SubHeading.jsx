import { doctor1 } from '@/assets';
import Image from 'next/image';

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: "1rem" }}>
    <p className="p__cormorant">{title}</p>
    {/* <Image src={doctor1} alt="spoon" className="spoon__img" /> */}
  </div>
);

export default SubHeading;
