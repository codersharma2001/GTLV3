import React, { useState } from "react";
import PlayersIcon from "../../../Assets/Icons/Players.png";
import EventIcon from "../../../Assets/Icons/Events.png";
import AddCampusIcon from "../../../Assets/Icons/Add-campus.png";
import ValidatorIcon from "../../../Assets/Icons/Validator.png";
import Navbar from "../../Shared/Navbar/Navbar";

const Dashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const sidebarItems = [
    {
      id: 1,
      icon: <img src={PlayersIcon} alt="Players" />,
      name: "Players",
      link: "/players",
    },
    {
      id: 2,
      icon: <img src={EventIcon} alt="Events" />,
      name: "Events",
      link: "/events",
    },
    {
      id: 3,
      icon: <img src={AddCampusIcon} alt="Campus" />,
      name: "Campus",
      link: "/campus",
    },
    {
      id: 4,
      icon: <img src={ValidatorIcon} alt="Validators" />,
      name: "Validators",
      link: "/validators",
    },
  ];

  const handleSidebarItemClick = (itemId) => {
    setSelectedComponent(itemId);
  };

  const renderComponentContent = () => {
    switch (selectedComponent) {
      case 1:
        return <div>This is the Players component</div>;
      case 2:
        return <div>This is the Events component</div>;
      case 3:
        return <div>This is the Campus component</div>;
      case 4:
        return <div>This is the Validators component</div>;
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="flex h-screen bg-gray-50 font-regular text-white">
        {/* Sidebar */}
        <div className="bg-gray-800 w-1/6 p-4">
          <ul className="space-y-2">
            {sidebarItems.map((item) => (
              <li key={item.id}>
                <button
                  className="text-white hover:text-gray-300"
                  onClick={() => handleSidebarItemClick(item.id)}
                >
                  <div>{item.icon}</div>
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Main content */}
        <div className="flex justify-center w-5/6 p-4">
          {renderComponentContent()}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
