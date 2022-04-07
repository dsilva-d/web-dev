import React from "react";
import {useDispatch} from "react-redux";
import TuitStats from "../tuit-stats";
import {deleteTuit} from "../actions/tuits-actions";

const TuitListItem = ({tuit}) => {
    let attach = ""
    const dispatch = useDispatch();
    const deleteTuit = (tuit) => {
        dispatch({type: 'delete-tuit', tuit})
    };

    if(!("attachments" in tuit) == 0) {
        if(!("image" in tuit.attachments) == 0) {
            attach = <img src={tuit.attachments.image} width="100%"/>
        }
        if(!("video" in tuit.attachments) == 0) {
            console.log(dispatch)
            }
    }
    return(
    <>
    <div style={{display: 'flex'}}>
        <div><img src={tuit.avatarImage} style={{borderRadius: "50%"}} width="48" height="48"/></div>
        <div>
                <p><a href="./profile.html">{tuit.postedBy.username}</a> @{tuit.handle} - {tuit.time}</p>

                {attach}
                <p>{tuit.tuit}</p>

        <TuitStats tuit={tuit}/>

        </div>
        <div>
            <i className="fas fa-remove float-end"
              onClick={() => deleteTuit(
                dispatch, tuit)}>x</i>
        </div>
    </div>
    </>
    );
}
export default TuitListItem;