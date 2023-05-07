import { useState } from "react";
import TotalPlayersComponent from "./TotalPlayersComponent";
import VanueComponent from "./VanueComponent";
import TitleAndSeasonComponent from "./TitleAndSeasonComponent";
import OnGoingRoundComponent from "./OnGoingRoundComponent";
import PlayersPassedComponent from "./PlayersPassedComponent";

const TotalPlayers = () => {
  return <TotalPlayersComponent></TotalPlayersComponent>;
};

const Venue = () => {
  return <VanueComponent></VanueComponent>;
};

const TitleSeason = () => {
  return <TitleAndSeasonComponent></TitleAndSeasonComponent>;
};

const OngoingRound = () => {
  return <OnGoingRoundComponent></OnGoingRoundComponent>;
};

const PlayersPassed = () => {
  return <PlayersPassedComponent></PlayersPassedComponent>;
};

const OnGoingEventsMenu = () => {
  const [activeButton, setActiveButton] = useState("totalPlayers");

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <>
      <div className="flex flex-wrap justify-center sm:justify-start space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-10 2xl:space-x-12 px-4 sm:px-10">
        <button
          className={`px-2 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 ${
            activeButton === "totalPlayers" && "bg-gray-300"
          }`}
          onClick={() => handleClick("totalPlayers")}
        >
          Total Players
        </button>
        <button
          className={`px-2 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 ${
            activeButton === "venue" && "bg-gray-300"
          }`}
          onClick={() => handleClick("venue")}
        >
          Venue
        </button>
        <button
          className={`px-2 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 ${
            activeButton === "titleSeason" && "bg-gray-300"
          }`}
          onClick={() => handleClick("titleSeason")}
        >
          Title and Season
        </button>
        <button
          className={`px-2 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 ${
            activeButton === "ongoingRound" && "bg-gray-300"
          }`}
          onClick={() => handleClick("ongoingRound")}
        >
          Ongoing Round
        </button>
        <button
          className={`px-2 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 ${
            activeButton === "playersPassed" && "bg-gray-300"
          }`}
          onClick={() => handleClick("playersPassed")}
        >
          Players Passed
        </button>
      </div>
      {activeButton === "totalPlayers" && <TotalPlayers />}
      {activeButton === "venue" && <Venue />}
      {activeButton === "titleSeason" && <TitleSeason />}
      {activeButton === "ongoingRound" && <OngoingRound />}
      {activeButton === "playersPassed" && <PlayersPassed />}
    </>
  );
};

export default OnGoingEventsMenu;
