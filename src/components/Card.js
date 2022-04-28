function Card(props) {
  const{cardTitle, cardDesc, cardBtn} = props;
  return (
    <div className="cardWrapper">
      <div className="card">
        <h3 className="cardTitle">{cardTitle}</h3>
        <p className="cardDesc">{cardDesc}</p>
        <a className="cardBtn" href="#">
          {cardBtn}
        </a>
      </div>
    </div>
  );
}

export default Card;
