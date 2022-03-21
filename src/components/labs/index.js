import React from "react";
import Styles from "./styles";
import Classes from "./classes";
import ConditionalOutput from "./conditional-output";
import TodoList from "./todo/TodoList.js";

const Labs = () => {
    return(
        <div>
            <h1>Labs</h1>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <TodoList/>
        </div>
    )
};
export default Labs;



 //    <ul>
 //                <li><a href="labs/a2/index.html">Assignment 2 Labs</a></li>
 //                <li><a href="labs/a3/index.html">Assignment 3 Labs</a></li>
 //                <li><a href="labs/a4/bootstrap/index.html">Assignment 4 Labs</a></li>
 //                <li><a href="labs/a5/js/index.html">Assignment 5 Labs</a></li>
 //      </ul>
