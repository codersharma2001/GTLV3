import React from "react";

const Card = ({ icon, name, description }) => {
  return (
    <div className="card w-72 bg-base-100 shadow-sm cursor-pointer hover:bg-green-50">
      <div className="card-body">
        <div className="flex-shrink-0 h-12 w-12">{icon}</div>
        <h4 className="text-lg font-semibold text-gray-900">{name}</h4>
        <p className="mt-1 text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;
