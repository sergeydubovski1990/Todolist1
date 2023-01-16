import React, {useState} from "react";
import {FilterButtonName} from "./App";






type PropsType = {
    shapka: string
    //tasks: Array<TaskType>
    tasks: TaskType[]
    removeTask: (tasckId:number)=>void
    filteredCurrentTasks:(buttonName:FilterButtonName)=> void

}

type TaskType = {
    id: number,
    title: string,
    isDone: boolean
}
export const Todolist = (props: PropsType) => {


    let [filterButtonName, setfilterButtonName]=useState<FilterButtonName>('All')
    console.log(filterButtonName)

    let durshlag = props.tasks
    if (filterButtonName === 'Active') {
        durshlag = props.tasks.filter(el => !el.isDone)
    }
    if (filterButtonName === 'Completed') {
        durshlag = props.tasks.filter(el => !el.isDone)
    }

    const filteredCurrentTasks = (buttonName: FilterButtonName) => {
        setfilterButtonName(buttonName)
    }


    return (
        <div>
            <h3>{props.shapka}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {durshlag.map((el, index) => {
                    return (
                        <li key={index}>
                            <button onClick={()=>props.removeTask(el.id)}>click</button>
                            <input type="checkbox" checked={el.isDone}/>
                            <span>{el.title}</span>

                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={()=>filteredCurrentTasks('All')}>All</button>
                <button onClick={()=>filteredCurrentTasks('Active')}>Active</button>
                <button onClick={()=>filteredCurrentTasks('Completed')}>Completed</button>
            </div>
        </div>
    )
}
