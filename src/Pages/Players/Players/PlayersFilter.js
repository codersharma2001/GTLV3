import React from "react";

const PlayersFilter = () => {
  return (
    <div className=" md:w-auto lg:w-auto xl:w-auto mx-10 my-4 flex justify-between px-8 py-8">
      <div className="flex justify-end py-2 px-4 items-center">
        <div className="grid grid-cols-2 gap-2">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn m-1 text-white btn-success hover:bg-green-700 gap-2"
            >
              Individual
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
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
            <label
              tabIndex={0}
              className="btn m-1 text-white btn-success hover:bg-green-700 gap-2"
            >
              Organization
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
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
