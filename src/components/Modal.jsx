import {createPortal} from "react-dom"
import {useRef, forwardRef, useImperativeHandle} from "react"
import Button from "./Button.jsx"


const Modal = forwardRef(function Modal({children, buttonCaption}, ref){
	const dialog = useRef()

	useImperativeHandle(ref, () => ({
		open(){
			dialog.current.showModal()
		}
	}))

	return createPortal(
		<dialog className="min-h-52 rounded-md p-4 bg-stone-200 text-stone-800 backdrop:bg-stone-900/90 shadow-md" ref={dialog}>
		 {/*<dialog ref={dialog}>*/}
			{children}
			<form method="dialog" className="w-full text-right mt-8 pr-4">
				<Button>{buttonCaption}</Button>
			</form>
		</dialog>,
		document.getElementById('modal-root')
	)
})

export default Modal