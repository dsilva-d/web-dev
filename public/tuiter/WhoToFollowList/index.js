import WhoToFollowListItem  from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList =()=> {
    var whotofollow = ``;
    for (let i = 0; i < who.length; i++) {
        whotofollow += WhoToFollowListItem(who[i]);
        }
    return(`
    <ul class="list-group">
    <li class="list-group-item"><b>Who to follow</b></li>` +
    whotofollow
    + `</ul>`);
}
export default WhoToFollowList;


