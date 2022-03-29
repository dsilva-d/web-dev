import tuits from "../data/tuits.json";
import TuitListItem from "../tuit-list/tuit-list-item";

const tuitsReducer = (state = tuits, action) => {
   switch (action.type) {
       case 'like-tuit':
         return state.map(tuit => {
           if(tuit._id === action.tuit._id) {
             if(tuit.liked === true) {
               tuit.liked = false;
               tuit.stats.likes--;
             } else {
               tuit.liked = true;
               tuit.stats.likes++;
             }
             return tuit;
           } else {
             return tuit;
           }
         });

      case 'delete-tuit':
        return state.filter(
           tuit => tuit._id !== action.tuit._id);

      case 'create-tuit':
        const newTuit = {
          tuit: action.tuit,
          _id: (new Date()).getTime() + '',
          postedBy: {
            "username": "New York Times"
          },
          "handle": "nytimes",
          stats: {
            retuits: 0,
            likes: 0,
            comments: 0,
          },
          "time": "Now",
          "avatarImage": "../nyt.png"
       }
       return [
         newTuit,
         ...state,
       ];
     default:
       return tuits
   }
}

export default tuitsReducer;