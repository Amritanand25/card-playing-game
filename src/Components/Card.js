import "./Card.css";

const Card = (props) => {
  return (
    <div className="card-container" style={{ color: `${props.color}` }}>
      <div>
        <p>{props.value}</p>
        {props.icon}
      </div>
      <div className="center">{props.icon}</div>
      <div className="invert">{props.icon}</div>
    </div>
  );
};

export default Card;
