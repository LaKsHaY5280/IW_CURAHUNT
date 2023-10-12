import Topcard from "@/components/Topcard";
import { servicies } from "@/assets/data";

const Toplist = () => {
  return (
    <div className="toplist">
      <div className="list">
        <Topcard type="hospital" />
        <Topcard type="doctor" />
        <div className="serv_holder">
          {servicies.map((serv) => (
            <div className="serv_card">
              <div className="serv_card-image">
                {/* <img src="service.svg" alt=""> */}
                {serv.img}
              </div>
              <div className="serv_card-box">
                <div className="serv_card-content">
                  <div>
                    <h2>{serv.title}</h2>
                  </div>
                  <div>
                    <p>{serv.desc}</p>
                  </div>
                </div>
                <div className="serv_card-content2">
                  <div>
                    <a href="#">{serv.know}</a>
                  </div>
                  <button>
                    <a href="#">{serv.btn}</a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Toplist;
