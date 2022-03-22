import React from "react";
import post from "./posts.json";

const PostSummaryItem = (post) => {
    return(
    <>
        <ul className={`list-group list-group-horizontal`}>
            <li key={post.title} className={`list-group-item col-10`} style={{"border": "none"}}>
                <div className={`wd-trending`}>
                    <span style={{"float":"left"}}>{post.topic}</span>
                    <br></br>
                    <p style={{"color":"white"}}><b>{post.userName}</b> <i className={`fa fa-check-circle`}></i>
                        <span style={{"color":"gray"}}> - {post.time}</span>
                        <br></br>
                        <span style={{"color":"white"}}><b>{post.title}</b></span></p>
                </div>
            </li>
            <li key={post.image} className={`list-group-item col`} style={{"border": "none"}}>
                <img src={post.image} className={`wd-suggested-photo end-0 position-absolute img-fluid`}></img>
            </li>
        </ul>
    </>
    );
}
export default PostSummaryItem;