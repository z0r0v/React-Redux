import React from "react";
import ReactDOM from "react-dom";
import SearchPanel from './components/searche-panel';
import AppHeader from './components/app-header';
import TodoList from './components/todo-list';



const App = () => {
    const value ='<script>alert("")</script>';
    return (
        <div>
            {value}
            <AppHeader/>
            <SearchPanel/>
            <TodoList/>
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));

