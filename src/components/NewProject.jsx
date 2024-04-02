import Input from "./Input";
import Modal from "./Modal";
import { useRef } from "react";

export default function NewProject({onSave, onCancel}){
    const modal=useRef();
    const entered_title = useRef();
    const entered_description = useRef();
    const entered_dueDate = useRef();

    function handleSave(){
        const title= entered_title.current.value
        const description=entered_description.current.value
        const dueDate=entered_dueDate.current.value
        
        if(title.trim()=='' || description.trim()==''  || dueDate.trim()==''){
            modal.current.open();
            return;
        }

        onSave({title:title,
            description:description,
            dueDate:dueDate
        });
    }

    return (
        <>
        <Modal ref={modal} value='Close'>
            <h2 className='font-bold text-stone-700 text-xl my-4'>Invalid Input</h2>
            <p className='text-stone-600 mb-4'>Oops! looks like you forgot to enter a value.</p>
            <p className='text-stone-600 mb-4'>Make sure you enter a valid Input.</p>
        </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end my-4 gap-4">
                <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancel</button>
                <button className="px-6 py-2 text-stone-200 hover:bg-stone-950 bg-stone-800 rounded-md" onClick={handleSave}>Save</button>
            </menu>
            <div>
                <Input type='text' ref={entered_title} label="Title" />
                <Input ref={entered_description} label="Description" isText/>
                <Input type='date' ref={entered_dueDate} label="Due Date" />
            </div>
        </div>
        </>
    );
}