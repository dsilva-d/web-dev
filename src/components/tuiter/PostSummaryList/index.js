import React from "react";
import {Link} from "react-router-dom";
import PostSummaryItem  from "./post-summary-item.js";
import exploreItems from "./posts.json";

const PostSummaryList =()=> (
    <>
    {exploreItems.map(exploreItems=> {
    return(
        <li key={exploreItems.title} className={`list-group-item`}>
            <PostSummaryItem exploreItems={exploreItems}/>
        </li>
    );
    })}
    </>
)
export default PostSummaryList;



//    var exploreList = ``;
//    for (let i = 0; i < exploreItems.length; i++) {
//        exploreList += PostSummaryItem(exploreItems[i]);
//        }
//    return(exploreList);