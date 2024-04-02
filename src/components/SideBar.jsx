import Button from "./Button";

export default function SideBar({handleClick, projects, onSelect, selectedId}){
    return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 ">
        <h2 className="mb-8 uppecase font-bold md:text-xl text-stone-200">Your Projects</h2>
        <div >
            <Button onClick={handleClick}>
                + Add Projects
            </Button>
        </div>
        <ul className=" mt-8">
            {projects.map((project)=>{

            let cssClass='w-full text-left px-2 py-1 my-1 rounded-sm hover:bg-stone-800 hover:text-stone-200'

            if(project.id===selectedId){
                cssClass+='text-stone-200 bg-stone-800';
            }else cssClass+='text-stone-400';

            return (
                <li key={project.id}><button className={cssClass} onClick={()=>onSelect(project.id)}>{project.title}</button></li>)}
            )}
        </ul>
    </aside>
    );
}