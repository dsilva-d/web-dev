import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as service from '../../services/tuits-service';
import TuitListItem from "./tuit-list-item";

const TuitList = () => {
  const tuits = useSelector(state => state.tuits);
  const dispatch = useDispatch();
  const findAllTuits = async () => {
    const tuits = await service.findAllTuits();
    dispatch({
      type: 'FIND_ALL_TUITS',
      tuits: tuits
    });
  }
  useEffect(findAllTuits, []);

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