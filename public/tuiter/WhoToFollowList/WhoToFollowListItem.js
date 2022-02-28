function WhoToFollowListItem(who) {
    return (`<li class="list-group-item">
                        <div class="container" style="height: 48px">
                        <div style="position: absolute; left: 12px;">
                            <img src=`+who.avatarIcon+` height="48px" width="48px" style="border-radius:50%; position: relative; right: 4px">
                        </div>
                        <div class="col-10" style="position: absolute; left: 64px">
                        <p>
                            <b>`+who.userName+`</b> <i class="fa fa-check-circle"></i>
                            <br>
                            @` + who.handle + `
                        </p>
                            </div>
                            <div>
                         <button type="button" class="btn btn-primary" style="position: absolute; right: 8px; top: 12px; border-radius: 25px;">Follow</button>
                        </div>
                        </div>
                        </li>`);
}
export default WhoToFollowListItem;