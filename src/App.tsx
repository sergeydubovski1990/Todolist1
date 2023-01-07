import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {
    const shapka = 'What to learn'

    const task1 = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false}
    ]
    const task2 = [
        {id: 1, title: "Hello World", isDone: true},
        {id: 2, title: "I am Happy", isDone: false},
        {id: 3, title: "Yo", isDone: false},
        {id: 4, title: "Yo", isDone: false}
    ]
    return (
        <div className="APP">
            <Todolist shapka={shapka} tasks={task1}/>
            <Todolist shapka={'What to learn'} tasks={task2}/>
        </div>
    );
}


export default App;
