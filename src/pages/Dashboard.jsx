import TinderCard from "react-tinder-card";
import { useState } from "react";
import ChatContainer from "../components/ChatContainer/ChatContainer";

const Dashboard = () => {
  const characters = [
    {
      name: "Richard Hendricks",
      url: "https://imgur.com/fjQZ80Z.png",
    },
    {
      name: "Erlich Bachman",
      url: "https://imgur.com/6WsU9ce.png",
    },
    {
      name: "Monica Hall",
      url: "https://imgur.com/FrKOfj8.png",
    },
    {
      name: "Jared Dunn",
      url: "https://imgur.com/aOnLFuA.png",
    },
    {
      name: "Dinesh Chugtai",
      url: "https://imgur.com/BfjHvFH.png",
    },
  ];
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <div className="dashboard">
      <ChatContainer />
      <div className="swipe-container">
        <div className="card-container">
          {characters.map((character) => (
            <TinderCard
              className="swipe"
              key={character.name}
              onSwipe={(dir) => swiped(dir, character.name)}
              onCardLeftScreen={() => outOfFrame(character.name)}
            >
              <div
                style={{ backgroundImage: "url(" + character.url + ")" }}
                className="card"
              >
                <h3>{character.name}</h3>
              </div>
            </TinderCard>
          ))}
          <div className="swipe-info">
            {lastDirection ? <p>You swiped {lastDirection}</p> : <p />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
