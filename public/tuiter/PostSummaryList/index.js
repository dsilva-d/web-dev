import PostSummaryItem  from "./PostSummaryItem.js";
import exploreItems from "./posts.js";

const PostSummaryList =()=> {
    var exploreList = ``;
    for (let i = 0; i < exploreItems.length; i++) {
        exploreList += PostSummaryItem(exploreItems[i]);
        }
    return(exploreList);
}
export default PostSummaryList;