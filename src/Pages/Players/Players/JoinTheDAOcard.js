import React from "react";

const JoinTheDAOcard = () => {
  return (
    <div className="card md:card-side bg-base-100 shadow-lg px-10 my-10 mx-10">
      <figure>
        <img
          src="/dao.jpg"
          className="rounded-xl"
          alt="Album"
        />
      </figure>
      <div className="card-body max-w-2xl">
        <h2 className="card-title">Join The DAO</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
        <div className="card-actions justify-start">
          <button className="btn btn-success text-white">Join</button>
        </div>
      </div>
    </div>
  );
};

export default JoinTheDAOcard;
