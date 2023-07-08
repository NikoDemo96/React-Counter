import React from "react";

const Home = ({ first, second, third, fourth, fifth, sixth }) => {
  return (
    <div className="col-8 bg-black justify-content-center d-flex p-5 gap-2 mx-auto">
      <div className="bg-dark text-white fs-1 border border-dark p-4 rounded-1 m-2">
        <i className="far fa-clock"></i>
      </div>
      <div className="bg-dark border border-dark p-4 rounded-1 border border-1 m-2 text-white fs-1">
        {sixth}
      </div>
      <div className="bg-dark border border-dark p-4 rounded-1 border border-1 m-2 text-white fs-1">
        {fifth}
      </div>
      <div className="bg-dark border border-dark p-4 rounded-1 border border-1 m-2 text-white fs-1">
        {fourth}
      </div>
      <div className="bg-dark border border-dark p-4 rounded-1 border border-1 m-2 text-white fs-1">
        {third}
      </div>
      <div className="bg-dark border border-dark p-4 rounded-1 border border-1 m-2 text-white fs-1">
        {second}
      </div>
      <div className="bg-dark border border-dark p-4 rounded-1 border border-1 m-2 text-white fs-1">
        {first}
      </div>
    </div>
  );
};

export default Home;
