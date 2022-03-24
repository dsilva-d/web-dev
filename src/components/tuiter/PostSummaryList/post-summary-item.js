import React from "react";
import exploreItems from "./posts.json";

const PostSummaryItem = ({exploreItems}) => {
    return(
    <>
        <ul className={`list-group list-group-horizontal`}>
            <li key={exploreItems.title} className={`list-group-item col-10`} style={{"border": "none"}}>
                <div className={`wd-trending`}>
                    <span style={{"float":"left"}}>{exploreItems.topic}</span>
                    <br></br>
                    <p style={{"color":"white"}}><b>{exploreItems.userName}</b> <i className={`fa fa-check-circle`}></i>
                        <span style={{"color":"gray"}}> - {exploreItems.time}</span>
                        <br></br>
                        <span style={{"color":"white"}}><b>{exploreItems.title}</b></span></p>
                </div>
            </li>
            <li key={exploreItems.image} className={`list-group-item col`} style={{"border": "none"}}>
                <img src={exploreItems.image} className={`wd-suggested-photo end-0 position-absolute img-fluid`}></img>
            </li>
        </ul>
    </>
    );
}
export default PostSummaryItem;