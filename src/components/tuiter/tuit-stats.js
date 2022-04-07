import {useDispatch} from "react-redux";
import {updateTuit} from "./actions/tuits-actions";

const TuitStats = ({tuit}) => {
  const dispatch = useDispatch();
  const likeTuit = () => {
    dispatch({type: 'like-tuit', tuit});
  };
  return (
  <>
  <div style={{display: 'flex'}}>

    <div style={{position: "absolute", left: "10%", bottom: "0px"}}><a href="./reply.html"><i className={`fa fa-comment`}/></a> {tuit.stats.comments}</div>
    <div style={{position: "absolute", left: "25%", bottom: "0px"}}><a href="./retuit.html"><i className={`fa fa-retweet`}/></a> {tuit.stats.retuits}</div>
    <div style={{position: "absolute", right: "37%", bottom: "0px"}}>
           <div>
             Likes: {tuit.stats.likes}
             <i onClick={() => updateTuit(dispatch, {
               ...tuit,
               likes: tuit.stats.likes + 1
             })} className="far fa-thumbs-up ms-2"></i>
             {console.log(dispatch)}
           </div>
    </div>
    <div style={{position: "absolute", right: "10%", bottom: "0px"}}>
               <div>
                 Dislikes: {tuit.stats.dislikes}
                 <i onClick={() => updateTuit(dispatch, {
                   ...tuit,
                   likes: tuit.stats.dislikes + 1
                 })} className="far fa-thumbs-down ms-2"></i>
               </div>
        </div>
    <div style={{position: "absolute", right: "5%", bottom: "0px"}}><a href="./share.html"><i className={`fa fa-share`}/></a></div>
  </div>
  </>
  );
}
export default TuitStats;