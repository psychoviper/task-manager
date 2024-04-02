import {createStore} from 'redux';

const temp={
    selectedId:undefined,
    projects:[],
    tasks:[],
}
const storedProjects = JSON.parse(localStorage.getItem('selectedProjects')) || temp;
const taskReducer=(state={...storedProjects,selectedId:undefined},action)=>
    {
    switch(action.type){
        case 'addTask':
            const newTask={
                task:action.task,
                id:Math.random(),
                projectId:state.selectedId,
            }
            return{
                projects:[...state.projects],
                tasks:[newTask, ...state.tasks],
                selectedId:state.selectedId,
            };

        case 'deleteTask':
            return{
                tasks: state.tasks.filter((task)=>task.id !== action.id),
                projects:[...state.projects],
                selectedId:state.selectedId,
            };

        case 'handleSelect':
            return{
                tasks: [...state.tasks],
                projects:[...state.projects],
                selectedId:action.id,
            };

        case 'handleClick':
            return{
                tasks: [...state.tasks],
                projects:[...state.projects],
                selectedId:null,
            };
        
        case 'handleDelete':
            return{
                tasks: state.tasks.filter((task)=>task.projectId !== state.selectedId),
                projects: state.projects.filter((project)=>project.id !== state.selectedId),
                selectedId:undefined,
            };
        
        case 'handleSave':
            const project={
                ...action.newProject,
                id:Math.random(),
            }
            return{
                tasks: [...state.tasks],
                selectedId:undefined,
                projects:[...state.projects,project],
            };
        
        case 'handleCancel':
            return{
                tasks: [...state.tasks],
                projects:[...state.projects],
                selectedId:undefined,
            }
        
        default: return state;
    }
    
}
const store=createStore(taskReducer);

export default store;