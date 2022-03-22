import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = (
    {
        active = 'explore'
    }) => {
    return(
                <>
                <div className={`d-none d-xxl-block d-xl-block`}>
                <div className={`list-group`}>
                    <a className={`list-group-item`} href="/">
                        <i className={`fab fa-twitter`}></i></a>
                    <a className={`list-group-item`} href="./home.html">
                                        <i className={`fa fa-home`}> Home</i></a>
                    <a className={`list-group-item active`} href="./explore.html">
                                        <i className={`fa fa-solid fa-hashtag`}> Explore</i></a>
                    <a className={`list-group-item`} href="./notifications.html">
                                        <i className={`fa fa-solid fa-bell`}> Notifications</i></a>
                    <a className={`list-group-item`} href="./messages.html">
                                        <i className={`fa fa-solid fa-envelope`}> Messages</i></a>
                    <a className={`list-group-item`} href="./bookmarks.html">
                                        <i className={`fa fa-solid fa-bookmark`}> Bookmarks</i></a>
                    <a className={`list-group-item`} href="./lists.html">
                                        <i className={`fa fa-solid fa-list`}> Lists</i></a>
                    <a className={`list-group-item`} href="./profile.html">
                                        <i className={`fa fa-solid fa-user`}> Profile</i></a>
                    <a className={`list-group-item`} href="./profile.html">
                                        <i className={`fa fa-ellipsis-h`}> More</i></a>
                </div>
                <div className={`d-grid mt-2`}>
                    <a href="tuit.html"
                       className={`btn btn-primary btn-block rounded-pill`}>
                        Tuit</a>
                </div>
                </div>

                <div className={`d-none d-lg-block d-sm-block d-xl-none`}>
                <div className={`list-group`}>
                    <a className={`list-group-item`} href="/">
                        <i className={`fab fa-twitter`}></i></a>
                    <a className={`list-group-item`} href="./home.html">
                                        <i className={`fa fa-home`}></i></a>
                    <a className={`list-group-item active`} href="./explore.html">
                                        <i className={`fa fa-solid fa-hashtag`}></i></a>
                    <a className={`list-group-item`} href="./notifications.html">
                                        <i className={`fa fa-solid fa-bell`}></i></a>
                    <a className={`list-group-item`} href="./messages.html">
                                        <i className={`fa fa-solid fa-envelope`}></i></a>
                    <a className={`list-group-item`} href="./bookmarks.html">
                                        <i className={`fa fa-solid fa-bookmark`}></i></a>
                    <a className={`list-group-item`} href="./lists.html">
                                        <i className={`fa fa-solid fa-list`}></i></a>
                    <a className={`list-group-item`} href="./profile.html">
                                        <i className={`fa fa-solid fa-user`}></i></a>
                    <a className={`list-group-item`} href="./profile.html">
                                        <i className={`fa fa-ellipsis-h`}></i></a>
                </div>
                <div className={`d-grid mt-2`}>
                    <a href="tuit.html"
                       className={`btn btn-primary btn-block rounded-pill`}>
                        Tuit</a>
                </div>
                </div>
                </>
    )
};
export default NavigationSidebar;