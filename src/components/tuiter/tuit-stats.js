import {useDispatch} from "react-redux";

const TuitStats = ({tuit}) => {
  const dispatch = useDispatch();
  const likeTuit = () => {
    dispatch({type: 'like-tuit', tuit});
  };
  return (
  <>
  <div style={{display: 'flex'}}>

    <div style={{position: "absolute", left: "15%", bottom: "0px"}}><a href="./reply.html"><i className={`fa fa-comment`}/></a> {tuit.stats.comments}</div>
    <div style={{position: "absolute", left: "35%", bottom: "0px"}}><a href="./retuit.html"><i className={`fa fa-retweet`}/></a> {tuit.stats.retuits}</div>
    <div style={{position: "absolute", right: "35%", bottom: "0px"}}>
        <span onClick={likeTuit}>
        {
          tuit.liked &&
          <i className="fas fa-heart me-1"
             style={{color: 'red'}}></i>
        }
        {
          !tuit.liked &&
          <i className="far fa-heart me-1"></i>
        }
        {tuit.stats && tuit.stats.likes}
        </span>
    </div>
    <div style={{position: "absolute", right: "15%", bottom: "0px"}}><a href="./share.html"><i className={`fa fa-share`}/></a></div>
  </div>
  </>
  );
}
export default TuitStats;