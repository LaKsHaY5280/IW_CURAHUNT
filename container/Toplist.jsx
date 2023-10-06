import Topcard from "@/components/Topcard";

const Toplist = () => {
  return (
    <div className="toplist">
      <div className="list">
        <Topcard type="hospital" />
        <Topcard type="doctor" />
      </div>
    </div>
  );
};

export default Toplist;
