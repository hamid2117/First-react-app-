import React from "react";

const Cardhtml = (kuxhbhi) => {
  return (
    <>
     
      <section className="card">
        <div className="cards">
          <img src={kuxhbhi.imgnet}
           alt="my pic" className="cards-img" />
          <div className="card-info">
            <span className="card-cetagary">{kuxhbhi.sname}</span>
            <h3 className="card-title">{kuxhbhi.title}</h3>
            <a href={kuxhbhi.link} target="blank">
              <button>Watch now</button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export default Cardhtml;
