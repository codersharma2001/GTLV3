import React from "react";
import { Link } from "react-router-dom";

const Card = ({ icon, name, description, link }) => {
  return (
    <Link to={link}>
      <div className="group card w-72 bg-base-100 dark:bg-base-800 shadow-sm cursor-pointer hover:bg-green-50">
        <div className="card-body">
          <div className="flex-shrink-0 h-12 w-12">{icon}</div>
          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-50 dark:group-hover:text-gray-600">
            {name}
          </h4>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 dark:group-hover:text-gray-600">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
