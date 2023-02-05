import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {v1} from 'uuid'


export type FilterButtonName = 'All' | 'Active' | 'Completed'

function App() {
    const shapka = 'What to learn'


    let [tasks1, setTask] = useState([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "Privet", isDone: true}
    ])


    const removeTask = (taskId: number) => {

        setTask(tasks1 = tasks1.filter(el => el.id !== taskId))
    }


    }
    return (
        <div className="APP">
            <Todolist
                shapka={shapka}
                tasks={tasks1}
                removeTask={removeTask}
            />
        </div>
    );
}


export default App;
