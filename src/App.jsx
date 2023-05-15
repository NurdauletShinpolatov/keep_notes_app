import React, { useEffect, useState } from 'react'
import './css/_null.css'
import './css/App.css'
// import Task from './components/Task/Task';
// import AddNewTask from './components/AddNewTask/AddNewTask';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Notes from './components/Notes/Notes';

// cd ../..
// E:
// cd Coding\WWW\Uacademy\react\keep_notes_app
// npm start

const App = () => {
  const [notes, setNotes] = useState([
    {
        id: "n1",
        title: "What I need to do today",
        tasks: [
            {
                value: "Go to classes",
                completed: true,
                id: "a1"
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
        id: "n2",
        title: "Do not forget",
        tasks: [
            {
                value: "Go to classes",
                completed: true,
                id: "a2"
            },
            {
                value: "Go to Uacademy",
                completed: false,
                id: "a120472d36154" // which is the result of "a"+Date() (or Date.now())
            },
            {
                value: "Cook dinner",
                completed: false,
                id: "a2039e45748"
            }
        ],
        edited: 12/5/2023,
        background: "bgPic1.jpg",
        labels: ["Today"]
    },
    {
        id: "n3",
        title: "asd",
        tasks: [
            {
                value: "Go to classes",
                completed: true,
                id: "a"
            },
            {
                value: "Go to Uacademy",
                completed: false,
                id: "a12047236154r" // which is the result of "a"+Date() (or Date.now())
            },
            {
                value: "Cook dinner",
                completed: false,
                id: "a203945748t"
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
          <Notes notes={notes} setNotes={setNotes} />
        </div>
      </div>
    </>
  );
}

export default App