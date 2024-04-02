import { useEffect} from 'react'
import { useSelector, useDispatch} from 'react-redux';
import SideBar from './components/SideBar.jsx'
import NewProject from './components/NewProject.jsx';
import NotSelected from './components/NotSelected.jsx';
import SelectedProject from './components/SelectedProject.jsx';


function App() {

  const dispatch = useDispatch();
// getting hold of the projects data from the redux central component.
  const selectedProject=useSelector(state=>state);
// stores every project/task in the local storage.
  useEffect(() => {
    localStorage.setItem('selectedProjects', JSON.stringify(selectedProject))
  }, [selectedProject]);

  function addTask(task){
    dispatch({type:'addTask',task:task});
  }
  
  function deleteTask(id){
    dispatch({type:'deleteTask',id:id});    
  }

  function handleSelect(id){
    dispatch({type:'handleSelect',id:id});    
  }

  function handleClick(){
    dispatch({type:'handleClick'});    
  }

  function handleDelete(){
    dispatch({type:'handleDelete'});    
  }

  function handleSave(newProject){
    console.log()
    dispatch({type:'handleSave',newProject:newProject});    
  }

  function handleCancel(){
    dispatch({type:'handleCancel'});
  }

  let content='';
  const project = selectedProject.projects.find(project=>project.id===selectedProject.selectedId);
  const tasks = selectedProject.tasks.filter(task=>task.projectId===selectedProject.selectedId);

  if(selectedProject.selectedId===null)content=<NewProject onSave={handleSave} onCancel={handleCancel}/>
  else if(selectedProject.selectedId===undefined)content=<NotSelected handleClick={handleClick}/>
  else content=<SelectedProject project={project} onDelete={handleDelete} onAddTask={addTask} onDeleteTask={deleteTask} tasks={tasks}/>

  return (
    <main className="h-screen flex gap-12">
      <SideBar projects={selectedProject.projects} handleClick={handleClick} onSelect={handleSelect} selectedId={selectedProject.selectedId}/>
      {content}
    </main>
  );
}

export default App;