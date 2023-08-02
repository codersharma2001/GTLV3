import React, { useState } from "react";
import Card from "./Card";
import PlayersIcon from "../../../Assets/Icons/Players.png";
import EventIcon from "../../../Assets/Icons/Events.png";
import AddCampusIcon from "../../../Assets/Icons/Add-campus.png";
import ValidatorIcon from "../../../Assets/Icons/Validator.png";
import Navbar from "../../Shared/Navbar/Navbar";
import PlayersComponent from "../../Players/Players/PlayersMenu"; // Create separate components for Players, Events, Campus, and Validators
import EventsComponent from "../../Events/Events/EventsMenu";
import CampusComponent from "../../AddCampus/AddCampus/AddCampusHome";
import ValidatorsComponent from "../../Validators/Validators/ValidatorsMenu";
import SettingComponent from "./Setting";

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState(null);
  const [profilePicture, setProfilePicture] = useState(null); 

  const cards = [
    {
      id: 1,
      // icon: <img src={PlayersIcon} />,
      name: "Players",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus integer aliquet quisque etiam.",
      link: "players", // Use unique identifiers for the links (e.g., players, events, campus, validators)
    },
    {
      id: 2,
      // icon: <img src={EventIcon} />,
      name: "Events",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus integer aliquet quisque etiam.",
      link: "events",
    },
    {
      id: 3,
      // icon: <img src={AddCampusIcon} />,
      name: "Campus",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus integer aliquet quisque etiam.",
      link: "campus",
    },
    {
      id: 4,
      // icon: <img src={ValidatorIcon} />,
      name: "Validator",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus integer aliquet quisque etiam.",
      link: "validators",
    },
    {
      id: 5,
      // icon: <img src={ValidatorIcon} />,
      name: "Settings",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus integer aliquet quisque etiam.",
      link: "setting",
    },
  ];

  const handleComponentClick = (link) => {
    setActiveComponent(link);
  };

  return (
    <>
       <Navbar profilePicture={profilePicture} /> 
      <div className="flex h-screen bg-gray-50 font-regular text-white">
        {/* Sidebar */}
        <div className="w-1/4 bg-gray-800">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`p-4 cursor-pointer ${
                activeComponent === card.link ? "bg-gray-700" : ""
              }`}
              onClick={() => handleComponentClick(card.link)}
            >
              {card.icon}
              <span className="ml-2">{card.name}</span>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="w-3/4 p-8">
          {activeComponent === "players" && <PlayersComponent />}
          {activeComponent === "events" && <EventsComponent />}
          {activeComponent === "campus" && <CampusComponent />}
          {activeComponent === "validators" && <ValidatorsComponent />}
          {activeComponent === "setting" && <SettingComponent />}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
