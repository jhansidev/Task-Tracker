import './App.css';
import {useState} from "react";
import React from "react";
import Header from "./components/header";
import Tasks from "./components/Tasks";



const App = () => {
    const [tasks, setTasks] = useState([{
        id :1,
        text:" Doctor's appointment",
        day: 'sep 18th,2021',
        reminder : 'true'
    },
        {
            id :2,
            text:" salon appointment",
            day: 'sep 20th,2021',
            reminder : 'false'
        },
        {
            id :3,
            text:"shopping day",
            day: 'sep 25th,2021',
            reminder : 'true'
        },
        {
            id :4,
            text:"Birthday ",
            day: 'sep 30th,2021',
            reminder : 'true'}
    ])

  return (
    <div className="Container">
        <Header />
        <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
