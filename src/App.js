// import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {

  const [showAddTask, setShowAddTask] = useState(true)

  const [tasks, setTasks] = useState([
    {
      id: 0,
      text: 'Running',
      day: 'Monday',
      reminder: true,
    },
    {
      id: 1,
      text: 'Walking',
      day: 'Tuesday',
      reminder: false
    },
  ])

  //Add Task

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000 + 1)

    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  //Delete Task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ?
          { ...task, reminder: !task.reminder } :
          task
      )
    )
  }

  return (
    <div className="container">
      <Header onAdd = {() => setShowAddTask(!showAddTask)} showAdd ={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggleReminder={toggleReminder} />
      ) : (
          'No tasks to show'
        )
      }
    </div>
  );
}

// class App extends React.Component {

//   render(){
//     return <h1>Hello from a class</h1>
//   }
// }

export default App;
