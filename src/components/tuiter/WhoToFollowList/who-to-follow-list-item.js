import React from "react";

const WhoToFollowListItem = ({who}) => {
    return (
    <>
        <div className={`container`} style={{"height": "48px"}}>
            <div styles={{"position": "absolute", "left": "12px"}}>
                <img src={who.avatarIcon} height="48px" width="48px" style={{"borderRadius":"50%", "position": "relative", "right": "24px"}}>
                </img>
            </div>
            <div className={`col-10`} style={{"position": "absolute", "left": "72px", "top": "10px"}}>
                <p>
                    <b>{who.userName}</b> <i className={`fa fa-check-circle`}></i>
                    <br></br>
                    @{who.handle}
                </p>
            </div>
            <div>
                <button type="button" className={`btn btn-primary`} style={{"position": "absolute", "right": "8px", "top" : "12px", "borderRadius" : "25px"}}>Follow</button>
            </div>
        </div>
    </>
    );
}
export default WhoToFollowListItem;