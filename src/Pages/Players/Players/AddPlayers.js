import React from "react";
import PlayersMenu from "./PlayersMenu";
import Navbar from "../../Shared/Navbar/Navbar";

const AddPlayers = () => {
  return (
    <>
      <Navbar></Navbar>
      <PlayersMenu></PlayersMenu>
      <div className=" md:w-auto lg:w-auto xl:w-auto mx-10 my-2  px-8 py-8">
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Naim Siddiqui</td>
                <td>Paid</td>
                <td>
                  <button className="btn btn-sm btn-success text-white hover:bg-green-600">
                    Add
                  </button>
                </td>
              </tr>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Naim Siddiqui</td>
                <td>Unpaid</td>
                <td>
                  <button className="btn btn-sm btn-success text-white hover:bg-green-600">
                    Add
                  </button>
                </td>
              </tr>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Naim Siddiqui</td>
                <td>Paid</td>
                <td>
                  <button className="btn btn-sm btn-success text-white hover:bg-green-600">
                    Add
                  </button>
                </td>
              </tr>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Naim Siddiqui</td>
                <td>Unpaid</td>
                <td>
                  <button className="btn btn-sm btn-success text-white hover:bg-green-600">
                    Add
                  </button>
                </td>
              </tr>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Naim Siddiqui</td>
                <td>Paid</td>
                <td>
                  <button className="btn btn-sm btn-success text-white hover:bg-green-600">
                    Add
                  </button>
                </td>
              </tr>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Naim Siddiqui</td>
                <td>Unpaid</td>
                <td>
                  <button className="btn btn-sm btn-success text-white hover:bg-green-600">
                    Add
                  </button>
                </td>
              </tr>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Naim Siddiqui</td>
                <td>Paid</td>
                <td>
                  <button className="btn btn-sm btn-success text-white hover:bg-green-600">
                    Add
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AddPlayers;
