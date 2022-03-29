import {useDispatch} from "react-redux";

const TuitStats = ({tuit}) => {
  const dispatch = useDispatch();
  const likeTuit = () => {
    dispatch({type: 'like-tuit', tuit});
  };
  return (
  <>
  <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>

    <div><a href="./reply.html"><i className={`fa fa-comment`}/></a> {tuit.stats.comments}</div>
    <div><a href="./retuit.html"><i className={`fa fa-retweet`}/></a> {tuit.stats.retuits}</div>
    <div>
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
    <div><a href="./share.html"><i className={`fa fa-share`}/></a></div>
  </div>
  </>
  );
}
export default TuitStats;