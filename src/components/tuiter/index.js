import React from "react";
import {Link} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowList from "./WhoToFollowList";
import PostSummaryList from "./PostSummaryList";
import ExploreComponent from "./explore-screen";

const Tuiter = () => {
    return(
    <>
    <ExploreComponent/>
    <PostSummaryList/>
    <NavigationSidebar active="home"/>
    <WhoToFollowList/>
    <Link to="/hello"> Hello </Link> |
    <Link to="/"> Labs </Link>
    </>
    )
};
export default Tuiter;