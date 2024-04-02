import image from '../assets/no-projects.png'
import Button from './Button'

export default function NotSelected({handleClick}){
    return(
        <div className="mt-24 text-center w-2/3">
            <img className="w-16 h-16 object-contain mx-auto" src={image} alt="No tasks"/>
            <h2 className='font-bold text-stone-500 text-xl my-4'>No Project Selected</h2>
            <p className='text-stone-600 mb-4'>Select a Project or Create a new one</p>
            <p className='mt-8'>
                <Button onClick={handleClick}>Create New Project</Button>
            </p>
        </div>
    );
}