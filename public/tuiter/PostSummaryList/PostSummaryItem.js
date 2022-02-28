function PostSummaryItem(post) {
    return(`
    <li class="list-group-item">
                        <ul class="list-group list-group-horizontal">
                            <li class="list-group-item col-10" style="border: none;">
                                <div class="wd-trending">
                                    <span style="float:left">`+ post.topic + `</span>
                                    <br>
                                    <p style="color:white;"><b>`+ post.userName + `</b> <i class="fa fa-check-circle"></i>
                                        <span style="color:gray"> - `+ post.time +`</span>
                                        <br>
                                        <span style="color:white;"><b>`+ post.title +`</b></span></p>
                                </div>
                            </li>
                            <li class="list-group-item col" style="border: none;">
                                <img src=` + post.image + ` class="wd-suggested-photo end-0 position-absolute  img-fluid">
                            </li>
                        </ul>
                    </li>

    `);
}
export default PostSummaryItem;