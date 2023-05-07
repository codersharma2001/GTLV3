import React from "react";

const PlayersFilter = () => {
  return (
    <div className="md:w-auto lg:w-auto xl:w-auto mx-10 my-4 flex justify-between px-8 py-8">
  <div className="flex justify-end py-2 px-4 items-center">
    <div className="grid grid-cols-2 gap-2">
      <div className="dropdown">
        <button className="btn btn-success btn-sm dropdown-toggle">
          Individual
        </button>
        <ul className="menu dropdown-content bg-base-100 shadow rounded-box w-52">
          <li>
            <a>Student</a>
          </li>
          <li>
            <a>Staff</a>
          </li>
          <li>
            <a>Alumni</a>
          </li>
          <li>
            <a>Parent</a>
          </li>
          <li>
            <a>Others</a>
          </li>
        </ul>
      </div>
      <div className="dropdown">
        <button className="btn btn-success btn-sm dropdown-toggle">
          Organization
        </button>
        <ul className="menu dropdown-content bg-base-100 shadow rounded-box w-52">
          <li>
            <a>School</a>
          </li>
          <li>
            <a>College / University</a>
          </li>
          <li>
            <a>Coaching Class</a>
          </li>
          <li>
            <a>Startup</a>
          </li>
          <li>
            <a>Corporate</a>
          </li>
          <li>
            <a>NGO</a>
          </li>
          <li>
            <a>Others</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

  );
};

export default PlayersFilter;
