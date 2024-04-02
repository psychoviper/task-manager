import { useState } from "react";

export default function NewTask({onAdd}){

    const [enteredValue, setEnteredValue] = useState('');

    function handleChange(event){
        setEnteredValue(event.target.value);
    }

    function handleClick(){
        if(enteredValue.trim()==='')return;
        onAdd(enteredValue);
        setEnteredValue('');
    }

    return(
        <div className="flex items-center gap-4">
            <input type='text' value={enteredValue} className="rounded-sm px-2 py-1 w-64 bg-stone-200" onChange={handleChange}/>
            <button className="text-stone-700 hover:text-stone-500 my-4" onClick={handleClick}>Add Task</button>
        </div>
    )
}