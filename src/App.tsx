import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

export type FilterButtonName='All' | 'Active' | 'Completed'
function App() {
    const shapka = 'What to learn'


    let [tasks1, setTask] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "Privet", isDone: true}
    ])


    const removeTask = (taskId: number) => {

        setTask(tasks1 = tasks1.filter(el => el.id !== taskId))
    }

    /*let durshlag = tasks1
    durshlag = tasks1.filter(el => el.isDone)*/

    /* const task2 = [
         {id: 1, title: "Hello World", isDone: true},
         {id: 2, title: "I am Happy", isDone: false},
         {id: 3, title: "Yo", isDone: false},
         {id: 4, title: "Privet", isDone: false}
     ]*/
/*
let [filterButtonName, setfilterButtonName]=useState<FilterButtonName>('All')
    console.log(filterButtonName)

    let durshlag = tasks1
    if (filterButtonName === 'Active') {
        durshlag = tasks1.filter(el => !el.isDone)
    }
    if (filterButtonName === 'Completed') {
        durshlag = tasks1.filter(el => !el.isDone)
    }

    const filteredCurrentTasks = (buttonName: FilterButtonName) => {
        setfilterButtonName(buttonName)
    }
*/


    return (
        <div className="APP">
            <Todolist
                shapka={shapka}
                tasks={tasks1}
                removeTask={removeTask}
             filteredCurrentTasks={}/>
        </div>
    );
}


export default App;
