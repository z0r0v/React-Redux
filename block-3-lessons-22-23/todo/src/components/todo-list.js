import React from "react";
import ToDoListItem from "./todo-list-item";



const TodoList = () => {
    return (
        <ul>
            <li><ToDoListItem label="Drink Coffe"/></li>
            <li><ToDoListItem label="Build React App" important/></li>
        </ul>
    );
};

export default TodoList;