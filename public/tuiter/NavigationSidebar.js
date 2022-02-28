const NavigationSidebar = () => {
    return(`
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i></a>
                <a class="list-group-item" href="./home.html">
                                    <i class="fa fa-home"> Home</i></a>
                <a class="list-group-item active" href="./explore.html">
                                    <i class="fa fa-solid fa-hashtag"> Explore</i></a>
                <a class="list-group-item" href="./notifications.html">
                                    <i class="fa fa-solid fa-bell"> Notifications</i></a>
                <a class="list-group-item" href="./messages.html">
                                    <i class="fa fa-solid fa-envelope"> Messages</i></a>
                <a class="list-group-item" href="./bookmarks.html">
                                    <i class="fa fa-solid fa-bookmark"> Bookmarks</i></a>
                <a class="list-group-item" href="./lists.html">
                                    <i class="fa fa-solid fa-list"> Lists</i></a>
                <a class="list-group-item" href="./profile.html">
                                    <i class="fa fa-solid fa-user"> Profile</i></a>
                <a class="list-group-item" href="./profile.html">
                                    <i class="fa fa-ellipsis-h"> More</i></a>
            </div>
            <div class="d-grid mt-2">
                <a href="tuit.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tuit</a>
            </div>
    `);
}
export default NavigationSidebar;
