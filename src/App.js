import logo from './logo.svg';
import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/hello-world";
import Labs from "./components/labs";
import Tuiter from "./components/tuiter";
import HomeScreen from "./components/tuiter";
import ExploreScreen from "./components/tuiter";
import NotificationScreen from "./components/tuiter";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <div className="container">
            <Routes>
             <Route path="/">
               <Route path="labs"
                      element={<Labs/>}/>
               <Route path="hello"
                      element={<HelloWorld/>}/>
               <Route path="tuiter"
                      element={<Tuiter/>}/>
              <Route index
                      element={<HomeScreen/>}/>
               <Route path="explore"
                      element={<ExploreScreen/>}/>
               <Route path="notifications"
                      element={<NotificationScreen/>}/>
             </Route>
            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
