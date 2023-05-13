import React, { useEffect, useState } from 'react'
import './css/_null.css'
import './css/App.css'
import Task from './components/Task/Task';
import AddNewTask from './components/AddNewTask/AddNewTask';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

// cd ../..
// E:
// cd Coding\WWW\Uacademy\react\keep_notes_app
// npm start

const App = () => {
  const [tasks, setTasks] = useState([
    {
      value: "Malumotlar LOCAL STORAGE da saqlanadi",
      id: "a1",
      completed: false,
    },
    {
      value: "DRAG qilib vaziyfalarning tartiblang",
      id: "a2",
      completed: false,
    },
    {
      value: "Ozgartirib bolgach ENTER bosing",
      id: "a3",
      completed: true,
    },
    { 
      value: "CRUD", 
      id: "a4", 
      completed: true,
    },
    {
      value: "BAJARILGAN vaziyfani belgilasa boladi",
      id: "a5",
      completed: false,
    },
    {
      value: "barajilgan/bajarilmaganlarni FILTRLANG",
      id: "a6",
      completed: false,
    }
  ]);
  const [notes, setNotes] = useState([
    {
        title: "What I need to do today",
        tasks: [
            {
                value: "Go to classes",
                completed: true,
                id: "a"+Date()
            },
            {
                value: "Go to Uacademy",
                completed: false,
                id: "a12047236154" // which is the result of "a"+Date() (or Date.now())
            },
            {
                value: "Cook dinner",
                completed: false,
                id: "a203945748"
            }
        ],
        edited: 13/4/2023,
        background: "#ff49bb",
        labels: ["University", "Work", "Today"]
    },
    {
        title: "Do not forget",
        tasks: [
            {
                value: "Go to classes",
                completed: true,
                id: "a"+Date()
            },
            {
                value: "Go to Uacademy",
                completed: false,
                id: "a12047236154" // which is the result of "a"+Date() (or Date.now())
            },
            {
                value: "Cook dinner",
                completed: false,
                id: "a203945748"
            }
        ],
        edited: 12/5/2023,
        background: "bgPic1.jpg",
        labels: ["Today"]
    },
    {
        title: "",
        tasks: [
            {
                value: "Go to classes",
                completed: true,
                id: "a"+Date()
            },
            {
                value: "Go to Uacademy",
                completed: false,
                id: "a12047236154" // which is the result of "a"+Date() (or Date.now())
            },
            {
                value: "Cook dinner",
                completed: false,
                id: "a203945748"
            }
        ],
        edited: 12/5/2023,
        background: "bgPic12.jpg",
        labels: ["Family", "University"]
    },
  ])

  const [labels, setLabels] = useState(["University", "Family", "Work", "Today"]);

  const [trash, setTrash] = useState([]);
  
  const [archive, setArchive] = useState([]);

  const tasksJsx = tasks.map((item) => (
    < Task key={item.id} item={item} setTasks={setTasks} />
  ))

  // min = 1, max = 9
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="main">
          <Sidebar
            labels={labels}
            setLabels={setLabels}
            trash={trash}
            setTrash={setTrash}
            archive={archive}
            setArchive={setArchive}
          />
          <div className="notes">
            <div className="block">
              <AddNewTask setTasks={setTasks} />
              <ul className="tasks__container">{tasksJsx}</ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App