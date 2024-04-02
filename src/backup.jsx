import {useState, useEffect} from 'react'

import SideBar from './components/SideBar.jsx'
import NewProject from './components/NewProject.jsx';
import NotSelected from './components/NotSelected.jsx';
import SelectedProject from './components/SelectedProject.jsx';

const temp={
  selectedId:undefined,
  projects:[],
  tasks:[],
}
const storedProjects = JSON.parse(localStorage.getItem('selectedProjects')) || temp;
// console.log(storedProjects);
function App() {

  const [selectedProject,setSelectedProject]=useState({
    ...storedProjects,
    selectedId:undefined,
  })

  useEffect(() => {
    localStorage.setItem('selectedProjects', JSON.stringify(selectedProject))
    console.log(storedProjects);

  }, [selectedProject]);

  function addTask(task){
    const newTask={
      task:task,
      id:Math.random(),
      projectId:selectedProject.selectedId,
    }
    setSelectedProject(prevValue=>{
      return{
        ...prevValue,
        tasks:[newTask, ...prevValue.tasks]
      }
    })
  }

  function deleteTask(id){
    setSelectedProject(prevValue=>{
      return{
        ...prevValue,
        tasks: prevValue.tasks.filter((task)=>task.id !== id),
      }
    })
  }

  function handleSelect(id){
    setSelectedProject(prevValue=>{
      return{
        ...prevValue,
        selectedId:id,
      }
    })
  }

  function handleClick(){
    setSelectedProject(prevValue=>{
      return{
        ...prevValue,
        selectedId:null,
      }
    })
  }

  function handleDelete(){
    setSelectedProject(prevValue=>{
      return{
        ...prevValue,
        selectedId:undefined,
        projects: prevValue.projects.filter((project)=>project.id !== prevValue.selectedId),
      }
    })
  }

  function handleSave(newProject){
    const project={
      ...newProject,
      id:Math.random(),
    }
    setSelectedProject(prevValue=>{
      return{
        ...prevValue,
        selectedId:undefined,
        projects:[...prevValue.projects,project]
      }
    })
  }

  function handleCancel(){
    setSelectedProject(prevValue=>{
      return{
        ...prevValue,
        selectedId:undefined,
      }
    })
  }

  let content='';
  const project = selectedProject.projects.find(project=>project.id===selectedProject.selectedId)

  if(selectedProject.selectedId===null)content=<NewProject onSave={handleSave} onCancel={handleCancel}/>
  else if(selectedProject.selectedId===undefined)content=<NotSelected handleClick={handleClick}/>
  else content=<SelectedProject project={project} onDelete={handleDelete} onAddTask={addTask} onDeleteTask={deleteTask} tasks={selectedProject.tasks}/>

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar projects={selectedProject.projects} handleClick={handleClick} onSelect={handleSelect} selectedId={selectedProject.selectedId}/>
      {content}
    </main>
  );
}

export default App;