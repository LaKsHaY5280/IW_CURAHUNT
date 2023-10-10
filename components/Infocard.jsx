const Infocard = ({ title, data }) => {
  return (
    <div className="infocard">
      <div>{title}</div>
      <div>
        {data?.map((val,ind) => {
          return <span key={ind}>{val}</span>;
        })}
      </div>
    </div>
  );
};

export default Infocard;
