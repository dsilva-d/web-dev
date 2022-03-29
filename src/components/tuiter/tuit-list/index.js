import React from "react";
//import tuits from "./tuits.json";
import TuitListItem
       from "./tuit-list-item";
//import './tuits.css';
import {useSelector} from "react-redux";

const TuitList = () => {
  const tuits = useSelector(state => state.tuits);
  return (
    <ul className="ttr-tuits list-group">
      {
        tuits.map && tuits.map(tuit =>
        <li className={`list-group-item`} key={tuit._id}>
          <TuitListItem key={tuit._id}
                        tuit={tuit}/>
        </li>
        )
      }
    </ul>
  );
}

export default TuitList;