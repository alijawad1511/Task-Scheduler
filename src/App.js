import {useState} from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


const App = () => {
  const [showAddTaskForm, setShowTaskForm] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'OS Mid Exam',
      dateTime: 'Dec 20 at 8:00am',
      reminder: true
    },
    {
      id: 2,
      text: 'SE Use Case ASG',
      dateTime: 'Dec 23 at 11:00am',
      reminder: true
    },
    {
      id: 3,
      text: 'Analysis of Algorithms ASG',
      dateTime: 'Dec 23 at 2:00pm',
      reminder: false
    },
  ])

  // Add Task
  const addTask = (task) => {
    const id = tasks[tasks.length - 1].id + 1;
    const newTask = {id,...task}
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=>task.id!==id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id
    ?{...task,reminder: !task.reminder}:task))
  }

  return (
    <div className="container">
      <Header title='Task Scheduler' onClickAddTask={()=>setShowTaskForm(!showAddTaskForm)} btnText={showAddTaskForm}/>
      {/* Ternary Operator without else used below => "&&"  */}
      {showAddTaskForm && (<AddTask onAddTask={addTask} />)}
      {tasks.length>0?(<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>):'No task to do'}      
    </div>
  );
}

export default App;
