import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(`
<div class="col-6 d-none d-xxl-block">
        <ul class="list-group">
            <li class="list-group-item" style="border: none;">
                <div class="wd-search-section position-relative">
                    <input height="25px" class="wd-search start-0 position-absolute ps-4" placeholder="Search Tuiter" type="search">
                    <i class="fa fa-search wd-magnify position-absolute"></i>
                    <a href="./explore-settings.html">
                        <img height="25px" class="wd-gear position-absolute" src="../gear.png">
                    </a>
                </div>
            </li>
            <li class="list-group-item" style="border: none;">
            <div class="wd-tabs position-relative center">
                <a href="./explore.html"><div class="wd-tab-highlighted wd-tab-alignment p-3"><span style="position: relative; bottom: 8px;">For you</span></div></a>
                <a href="./trending.html"><div class="wd-tab-unhighlighted wd-tab-alignment p-3"><span style="position: relative; bottom: 8px;">Trending</span></div></a>
                <a href="./news.html"><div class="wd-tab-unhighlighted wd-tab-alignment p-3"><span style="position: relative; bottom: 8px;">News</span></div></a>
                <a href="./sports.html"><div class="wd-tab-unhighlighted wd-tab-alignment p-3"><span style="position: relative; bottom: 8px;">Sports</span></div></a>
                <a href="./entertainment.html"><div class="wd-tab-unhighlighted wd-tab-alignment p-3"><span style="position: relative; bottom: 8px;">Entertainment</span></div></a>
                <div class="wd-tab-unhighlighted wd-tab-alignment p-3"><span style="position: relative; bottom: 8px;"></span></div>
                <div class="wd-tab-unhighlighted wd-tab-alignment p-3"><span style="position: relative; bottom: 8px;"></span></div>
                <div class="wd-tab-unhighlighted wd-tab-alignment p-3"><span style="position: relative; bottom: 8px;"></span></div>
                <div class="wd-tab-unhighlighted wd-tab-alignment p-3"><span style="position: relative; bottom: 8px;"></span></div>
                <div class="wd-tab-unhighlighted wd-tab-alignment p-3"><span style="position: relative; bottom: 8px;"></span></div>

                <div class="wd-alignment-done position-relative"></div>
            </div>
            </li>
            <li class="list-group-item" style="border: none;">
                <div>
                    <div class="pull-left wd-main-image"><img src="../spaceship.jpg"/></div>
                    <div class="pull-left position-absolute bottom-0 mb-2 ms-4" style="color: white; font-size: 32px;"><b>SpaceX's Starship</b></div>
                </div>
            </li>
           ${PostSummaryList()}
           </ul></div>



           <div class="col-6 d-none d-xl-block d-xxl-none">
                       <ul class="list-group">
                           <li class="list-group-item" style="border: none;">
                               <div class="wd-search-section position-relative">
                                   <input height="25px" class="wd-search start-0 position-absolute ps-4" placeholder="Search Tuiter" type="search">
                                   <i class="fa fa-search wd-magnify position-absolute"></i>
                                   <a href="./explore-settings.html">
                                       <img height="25px" class="wd-gear position-absolute" src="../gear.png">
                                   </a>
                               </div>
                           </li>
                           <li class="list-group-item" style="border: none;">
                               <div class="wd-tabs position-relative center">
                                   <a href="./explore.html"><div class="wd-tab-highlighted wd-tab-alignment p-3"><span style="position: relative; bottom: 8px;">For you</span></div></a>
                                   <a href="./trending.html"><div class="wd-tab-unhighlighted wd-tab-alignment p-3"><span style="position: relative; bottom: 8px;">Trending</span></div></a>
                                   <a href="./news.html"><div class="wd-tab-unhighlighted wd-tab-alignment p-3"><span style="position: relative; bottom: 8px;">News</span></div></a>
                                   <a href="./sports.html"><div class="wd-tab-unhighlighted wd-tab-alignment p-3"><span style="position: relative; bottom: 8px;">Sports</span></div></a>
                                   <a href="./entertainment.html"><div class="wd-tab-unhighlighted wd-tab-alignment p-3"><span style="position: relative; bottom: 8px;">Entertainment</span></div></a>
                                   <div class="wd-tab-unhighlighted wd-tab-alignment p-3"><span style="position: relative; bottom: 8px;"></span></div>
                                   <div class="wd-tab-unhighlighted wd-tab-alignment p-3"><span style="position: relative; bottom: 8px;"></span></div>
                                   <div class="wd-alignment-done position-relative"></div>
                               </div>
                           </li>
                           <li class="list-group-item" style="border: none;">
                               <div>
                                   <div class="pull-left wd-main-image"><img src="../spaceship.jpg"/></div>
                                   <div class="pull-left position-absolute bottom-0 mb-2 ms-2" style="color: white; font-size: 32px;"><b>SpaceX's Starship</b></div>
                               </div>
                           </li>
           ${PostSummaryList()}
           </ul></div>


           <div class="col-7 d-none d-lg-block d-xl-none">
                       <ul class="list-group">
                           <li class="list-group-item" style="border: none;">
                               <div class="wd-search-section position-relative">
                                   <input height="25px" class="wd-search start-0 position-absolute ps-4" placeholder="Search Tuiter" type="search">
                                   <i class="fa fa-search wd-magnify position-absolute"></i>
                                   <a href="./explore-settings.html">
                                       <img height="25px" class="wd-gear position-absolute" src="../gear.png">
                                   </a>
                               </div>
                           </li>
                           <li class="list-group-item" style="border: none;">
                               <div class="wd-tabs position-relative center">
                                   <a href="./explore.html"><div class="wd-tab-highlighted wd-tab-alignment p-3"><span style="position: relative; bottom: 8px;">For you</span></div></a>
                                   <a href="./trending.html"><div class="wd-tab-unhighlighted wd-tab-alignment p-3 ps-auto pb-auto pt-auto"><span style="position: relative; bottom: 8px;">Trending</span></div></a>
                                   <a href="./news.html"><div class="wd-tab-unhighlighted wd-tab-alignment p-3"><span style="position: relative; bottom: 8px;">News</span></div></a>
                                   <a href="./sports.html"><div class="wd-tab-unhighlighted wd-tab-alignment p-3"><span style="position: relative; bottom: 8px;">Sports</span></div></a>
                                   <a href="./entertainment.html"><div class="wd-tab-unhighlighted wd-tab-alignment p-3"><span style="position: relative; bottom: 8px;">Entertainment</span></div></a>
                                   <div class="wd-tab-unhighlighted wd-tab-alignment p-3"><span style="position: relative; bottom: 8px;"></span></div>
                                   <div class="wd-tab-unhighlighted wd-tab-alignment p-3"><span style="position: relative; bottom: 8px;"></span></div>
                                   <div class="wd-alignment-done position-relative"></div>
                               </div>
                           </li>
                           <li class="list-group-item" style="border: none;">
                               <div>
                                   <div class="pull-left wd-main-image"><img src="../spaceship.jpg"/></div>
                                   <div class="pull-left position-absolute bottom-0 mb-2 ms-2" style="color: white; font-size: 32px;"><b>SpaceX's Starship</b></div>
                               </div>
                           </li>
           ${PostSummaryList()}
           </ul></div>

           <div class="col-9 d-none d-md-block d-lg-none">
                       <ul class="list-group">
                           <li class="list-group-item" style="border: none;">
                               <div class="wd-search-section position-relative">
                                   <input height="25px" class="wd-search start-0 position-absolute ps-4" placeholder="Search Tuiter" type="search">
                                   <i class="fa fa-search wd-magnify position-absolute"></i>
                                   <a href="./explore-settings.html">
                                       <img height="25px" class="wd-gear position-absolute" src="../gear.png">
                                   </a>
                               </div>
                           </li>
                           <li class="list-group-item" style="border: none;">
                               <div class="wd-tabs position-relative center">
                                   <a href="./explore.html"><div class="wd-tab-highlighted wd-tab-alignment p-3"><span style="position: relative; bottom: 12px; font-size: 16px;">For you</span></div></a>
                                   <a href="./trending.html"><div class="wd-tab-unhighlighted wd-tab-alignment p-3"><span style="position: relative; bottom: 12px; font-size: 16px;">Trending</span></div></a>
                                   <a href="./news.html"><div class="wd-tab-unhighlighted wd-tab-alignment p-3"><span style="position: relative; bottom: 12px; font-size: 16px;">News</span></div></a>
                                   <a href="./sports.html"><div class="wd-tab-unhighlighted wd-tab-alignment p-3"><span style="position: relative; bottom: 12px; font-size: 16px;">Sports</span></div></a>
                                   <div class="wd-tab-unhighlighted wd-tab-alignment p-3"><span style="position: relative; bottom: 8px;"></span></div>
                                   <div class="wd-tab-unhighlighted wd-tab-alignment p-3"><span style="position: relative; bottom: 8px;"></span></div>
                                   <div class="wd-tab-unhighlighted wd-tab-alignment p-3"><span style="position: relative; bottom: 8px;"></span></div>
                                   <div class="wd-tab-unhighlighted wd-tab-alignment p-3"><span style="position: relative; bottom: 8px;"></span></div>
                                   <div class="wd-alignment-done position-relative"></div>
                               </div>
                           </li>
                           </li>
                           <li class="list-group-item" style="border: none;">
                               <div>
                                   <div class="pull-left wd-main-image"><img src="../spaceship.jpg"/></div>
                                   <div class="pull-left position-absolute bottom-0 mb-2 ms-2" style="color: white; font-size: 32px;"><b>SpaceX's Starship</b></div>
                               </div>
                           </li>
           ${PostSummaryList()}
           </ul></div>



           <div class="col-10 d-none d-sm-block d-md-none">
                       <ul class="list-group">
                           <li class="list-group-item" style="border: none;">
                               <div class="wd-search-section position-relative">
                                   <input height="25px" class="wd-search start-0 position-absolute ps-4" placeholder="Search Tuiter" type="search">
                                   <i class="fa fa-search wd-magnify position-absolute"></i>
                                   <a href="./explore-settings.html">
                                       <img height="25px" class="wd-gear position-absolute" src="../gear.png">
                                   </a>
                               </div>
                           </li>
                           <li class="list-group-item" style="border: none;">
                               <div class="wd-tabs position-relative center">
                                   <a href="./explore.html"><div class="wd-tab-highlighted wd-tab-alignment p-3"><span style="position: relative; bottom: 12px; font-size: 16px;">For you</span></div></a>
                                   <a href="./trending.html"><div class="wd-tab-unhighlighted wd-tab-alignment p-3"><span style="position: relative; bottom: 12px; font-size: 16px;">Trending</span></div></a>
                                   <a href="./news.html"><div class="wd-tab-unhighlighted wd-tab-alignment p-3"><span style="position: relative; bottom: 12px; font-size: 16px;">News</span></div></a>
                                   <a href="./sports.html"><div class="wd-tab-unhighlighted wd-tab-alignment p-3"><span style="position: relative; bottom: 12px; font-size: 16px;">Sports</span></div></a>
                                   <div class="wd-tab-unhighlighted wd-tab-alignment p-3"><span style="position: relative; bottom: 8px;"></span></div>

                                   <div class="wd-alignment-done position-relative"></div>
                               </div>
                           </li>
                           <li class="list-group-item" style="border: none;">
                               <div>
                                   <div class="pull-left wd-main-image"><img src="../spaceship.jpg"/></div>
                                   <div class="pull-left position-absolute bottom-0 mb-2 ms-2" style="color: white; font-size: 32px;"><b>SpaceX's Starship</b></div>
                               </div>
                           </li>
           ${PostSummaryList()}
           </ul></div>



    `);
}
export default ExploreComponent;