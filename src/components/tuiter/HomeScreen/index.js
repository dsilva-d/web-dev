import React from "react";
import {Link} from "react-router-dom";
import WhatsHappening from "../whats-happening";

import TuitList from "../tuit-list"

const HomeScreen = () => {
  return(
    <div>
      <h2>Home</h2>
      <WhatsHappening/>
      <TuitList/>
    </div>
  )
}
export default HomeScreen;