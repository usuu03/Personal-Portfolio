import React from "react";
import helpingHand from "../assets/Helping_hand.jpg";
import flightPrice from "../assets/flight_price.jpeg";
import realmQuest from "../assets/realmQuest.png";
import ProjectItem from "../components/ProjectItem";
import "../styles/ProjectDisplay.css";
import "../styles/Projects.css";

export default function Projects() {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="projectList">
        <ProjectItem name="Realm Quest" image={realmQuest} />
        <ProjectItem name="Crowdfunding Platform" image={helpingHand} />
        <ProjectItem name="Flight Price Tracker" image={flightPrice} />
      </div>
    </div>
  );
}
