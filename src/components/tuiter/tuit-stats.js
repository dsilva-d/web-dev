import {useDispatch} from "react-redux";
import {updateTuit} from "./actions/tuits-actions";

const TuitStats = ({tuit}) => {
  const dispatch = useDispatch();
  const likeTuit = () => {
    let likes = tuit.stats.likes;
    let liked = tuit.liked;
    if(tuit.liked) {
        likes = likes - 1;
        liked = false;
    }
    else {
        likes = likes + 1;
        liked = true;
    }
    const stats = {
    ...tuit.stats,
    likes
    }
    updateTuit(dispatch, {...tuit, stats, liked})
  };

  const dislikeTuit = () => {
      let dislikes = tuit.stats.dislikes;
      let disliked = tuit.disliked;

      if(tuit.disliked) {
          dislikes = dislikes - 1;
          disliked = false;
      }
      else {
          dislikes = dislikes + 1;
          disliked = true;
      }
      const stats = {
      ...tuit.stats,
      dislikes
      }
      updateTuit(dispatch, {...tuit, stats, disliked})
    };



  return (
  <>
  <div style={{display: 'flex'}}>

    <div style={{position: "absolute", left: "10%", bottom: "0px"}}><a href="./reply.html"><i className={`fa fa-comment`}/></a> {tuit.stats.comments}</div>
    <div style={{position: "absolute", left: "25%", bottom: "0px"}}><a href="./retuit.html"><i className={`fa fa-retweet`}/></a> {tuit.stats.retuits}</div>
    <div style={{position: "absolute", right: "37%", bottom: "0px"}}>
           <div>
             Likes: {tuit.stats.likes}
             {(() => {
             if(!tuit.liked) {
                return (<i onClick={() =>
                     likeTuit()
                     }  className="far fa-thumbs-up ms-2"></i>);
                                       }
               else {
                return (<i onClick={() =>
                     likeTuit()
                     }  className="far fa-thumbs-up ms-2"
                                        style={{color: 'red'}}></i>);
                                       }
                })()}
           </div>
    </div>
    <div style={{position: "absolute", right: "10%", bottom: "0px"}}>
               <div>
                 Dislikes: {tuit.stats.dislikes}
                              {(() => {
                              if(!tuit.disliked) {
                                 return (<i onClick={() =>
                                      dislikeTuit()
                                      }  className="far fa-thumbs-down ms-2"></i>);
                                                        }
                                else {
                                 return (<i onClick={() =>
                                      dislikeTuit()
                                      }  className="far fa-thumbs-down ms-2"
                                                         style={{color: 'red'}}></i>);
                                                        }
                                 })()}
               </div>
        </div>
    <div style={{position: "absolute", right: "5%", bottom: "0px"}}><a href="./share.html"><i className={`fa fa-share`}/></a></div>
  </div>
  </>
  );
}
export default TuitStats;