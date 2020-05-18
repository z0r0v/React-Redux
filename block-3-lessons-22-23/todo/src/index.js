import React from "react";
import ReactDOM from "react-dom";

const TodoList = () => {

    const items = ['Learn React 1', 'Build Awesome App 1'];

    return (
        <ul>
            <li>{items[0]}</li>
            <li>{items[1]}</li>
        </ul>
    );
};

const AppHeader = () => {
    return <h1>My Todo List</h1>
};

const SearchPanel = () => {

    const searcheStyle = {
        fontSize: '20px'
    };

    const searchText = 'Type here to search';
    return <input style={searcheStyle} placeholder={searchText}/>
};


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

