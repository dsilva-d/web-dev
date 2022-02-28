import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList(whoList) {
    return(`
    <ul class="list-group">
    <li class="list-group-item"><b>Who to follow</b></li>
    whoList.forEach(who => WhoToFollowListItem(who))
    </ul>`);
}