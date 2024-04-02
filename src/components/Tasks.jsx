import NewTask from "./NewTask"

export default function Tasks({tasks, onAdd, onDelete}){
    // console.log(tasks);
    return(
        <section>
            <h2 className="text-2xl text-stone-700 font-bold mb-4">Tasks</h2>
            <NewTask onAdd={onAdd} />
            {tasks.length>0? 
            <ul className="p-4 mt-8 rounded-sm bg-stone-200">
                {tasks.map((task)=>(<li key={task.id} className="flex justify-between my-4"><span>{task.task}</span>
                <button className="text-stone-700 hover:text-red-500" onClick={()=>onDelete(task.id)}>Delete Task</button></li>))}
            </ul> : <p className="p-4 mt-4 font-bold">No Task</p>}
        </section>
    )
}