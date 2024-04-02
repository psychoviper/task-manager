import Tasks from "./Tasks"

export default function SelectedProject({project, onDelete, onAddTask, onDeleteTask, tasks}){
    // console.log(tasks);
    const formattedDate = new Date(project.dueDate).toLocaleDateString('en-us',
        {
            year:'numeric',
            month:'short',
            day:'numeric'
        }
    )
    return(
        <div className="w-[10rem] lg:w-[35rem] sm:w-[10rem] md:w-[20rem] my-16">
            <header className=" pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex justify-between items-center">
                    <h1 className="font-bold text-xl text-stone-600 mb-2">{project.title}</h1>
                    <button className="text-stone-600 hover:text-stone-950" onClick={onDelete}>Delete</button>
                </div>
                <p className="mb-4 text-stone-400">{formattedDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
            </header>
            <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks}/>
        </div>
    )
}