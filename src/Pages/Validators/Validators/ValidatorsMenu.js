import React from "react";
import ValidatorIcon from "../../../Assets/Icons/Validator.png";
import { Link } from "react-router-dom";

const ValidatorsMenu = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md w-full md:w-auto lg:w-auto xl:w-auto mx-4 md:mx-10 my-4 flex flex-col md:flex-row justify-between px-4 md:px-8 py-8">
      <div className="flex items-center justify-center md:justify-start p-4">
        <div className="bg-gray-200 dark:bg-gray-600 rounded-full p-3">
          <div className="flex-shrink-0 h-12 w-12">
            <img src={ValidatorIcon} />
          </div>
        </div>
        <div className="ml-4">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white">
            Validator
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue a
            molestie ut vitae.
          </p>
        </div>
      </div>
      <div className="flex justify-center md:justify-end py-2 md:py-0 px-4 items-center">
        <div className="grid grid-cols-2 gap-2">
          <button className="btn btn-sm mr-2 text-xs text-white btn-success hover:bg-green-700">
            <Link to="/add-validators">Add Validator</Link>
          </button>
          <button className="btn btn-sm mr-2 text-xs text-white btn-success hover:bg-green-700">
            <Link to="/registered-validators">Validators</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ValidatorsMenu;
