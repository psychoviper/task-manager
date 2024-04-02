import { useRef, useImperativeHandle, forwardRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

const Modal = forwardRef(function Modal({children,value},ref){

    const dialog =useRef();

    useImperativeHandle(ref,()=>
        {
            return {
                open(){
                    dialog.current.showModal();
                }
            }
        }
    )

    return createPortal(
    <dialog ref={dialog} className="backdrop:bg-stone-900/90 rounded-md shadow-md p-4">
        {children}
        <form method='dialog' className="text-right mt-4"><Button>{value}</Button></form>
    </dialog>,document.getElementById("modal-root"));
})

export default Modal;