import React from "react";
import WhoToFollowListItem from "./who-to-follow-list-item.js";
import who from "./who.json";

const WhoToFollowList =()=> (
    <>
    <ul className={`list-group`}>
                    <li className={`list-group-item`}>
                        <b>Who to follow</b>
                    </li>
    {who.map(who=> {
    return(
        <li key={who.handle} className={`list-group-item`}>
            <WhoToFollowListItem who={who}/>
        </li>
    );})}
    </ul>
    </>
    )
export default WhoToFollowList;



