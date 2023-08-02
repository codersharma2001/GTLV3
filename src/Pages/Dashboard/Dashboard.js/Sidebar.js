import React from "react";

const Sidebar = ({ cards, selectedCard, onCardClick }) => {
  return (
    <div className="h-screen bg-gray-50 font-regular text-white flex flex-col items-center">
      <div className="grid gap-5">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`cursor-pointer ${selectedCard === card.id ? "text-blue-500" : ""}`}
            onClick={() => onCardClick(card.id)}
          >
            {card.icon}
            <p className="text-center">{card.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
