import PostSummaryList from "../PostSummaryList/index.js";
import React from "react";


const ExploreComponent = () => {
    return(
    <>
        <div>
        <ul className={`list-group`}>
            <li className={`list-group-item`} style={{"border": "none"}}>
                <div className={`wd-search-section position-relative`}>
                    <input height="25px" className={`wd-search start-0 position-absolute ps-4`} placeholder="Search Tuiter" type="search"></input>
                    <i className={`fa fa-search wd-magnify position-absolute`}></i>
                    <a href="./explore-settings.html">
                        <img height="25px" className={`wd-gear position-absolute`} src="./gear.png"></img>
                    </a>
                </div>
            </li>
            <li className={`list-group-item`} style={{"border": "none"}}>
            <div className={`wd-tabs position-relative center`}>
                <a href="./explore.html"><div className={`wd-tab-highlighted wd-tab-alignment p-3`}><span style={{"position": "relative", "bottom": "8px"}}>For you</span></div></a>
                <a href="./trending.html"><div className={`wd-tab-unhighlighted wd-tab-alignment p-3`}><span style={{"position": "relative", "bottom": "8px"}}>Trending</span></div></a>
                <a href="./news.html"><div className={`wd-tab-unhighlighted wd-tab-alignment p-3`}><span style={{"position": "relative", "bottom": "8px"}}>News</span></div></a>
                <a href="./sports.html"><div className={`wd-tab-unhighlighted wd-tab-alignment p-3`}><span style={{"position": "relative", "bottom": "8px"}}>Sports</span></div></a>
                <a href="./entertainment.html"><div className={`wd-tab-unhighlighted wd-tab-alignment p-3`}><span style={{"position": "relative", "bottom": "8px"}}>Entertainment</span></div></a>
                <div className={`wd-tab-unhighlighted wd-tab-alignment p-3`}><span style={{"position": "relative", "bottom": "8px"}}></span></div>
                <div className={`wd-tab-unhighlighted wd-tab-alignment p-3`}><span style={{"position": "relative", "bottom": "8px"}}></span></div>
                <div className={`wd-tab-unhighlighted wd-tab-alignment p-3`}><span style={{"position": "relative", "bottom": "8px"}}></span></div>
                <div className={`wd-tab-unhighlighted wd-tab-alignment p-3`}><span style={{"position": "relative", "bottom": "8px"}}></span></div>
                <div className={`wd-tab-unhighlighted wd-tab-alignment p-3`}><span style={{"position": "relative", "bottom": "8px"}}></span></div>
                <div className={`wd-alignment-done position-relative`}></div>
            </div>
            </li>
            <li className={`list-group-item`} style={{"border": "none"}}>
                <div>
                    <div className={`pull-left wd-main-image`}><img src="./spaceship.jpg"></img></div>
                    <div className={`pull-left position-absolute bottom-0 mb-2 ms-4`} style={{"color": "white", "fontSize": "32px"}}><b>SpaceX's Starship</b></div>
                </div>
            </li>
           <PostSummaryList/>
           </ul></div>


    </>
    );
}
export default ExploreComponent;