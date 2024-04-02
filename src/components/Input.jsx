import { forwardRef } from "react";

const Input = forwardRef(function Input({label, isText, ...props},ref){
    const classes="w-full p-1 border-b-2 border-stone-300 rounded-sm bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
    return(
        <p className="flex flex-col gap-1 my-4">
            <label className="text-sm text-stone-500 uppercase">{label}</label>
            {isText ? <textarea ref={ref} {...props} className={classes}/> : <input ref={ref} {...props} className={classes}/>}
        </p>
    );
})

export default Input;