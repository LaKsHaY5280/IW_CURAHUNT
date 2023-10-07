const Infocard = ({ title, data }) => {
  return (
    <div className="infocard">
      <div>{title}</div>
      <div>
        {data?.map((val) => {
          return <span key={val}>{val}</span>;
        })}
      </div>
    </div>
  );
};

export default Infocard;
