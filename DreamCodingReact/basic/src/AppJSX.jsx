import React from "react";
import Profile from "./components/Profile";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
const App = () => {
  const team = useSelector((state) => state.team);
  console.log("team", team);
  return (
    <>
      {team.map((human) => (
        <Profile
          name={human.name}
          job={human.job}
          link={human.link}
          career={human.career}
        />
      ))}
    </>
  );
};

export default App;
