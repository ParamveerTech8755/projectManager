import Input from "./Input.jsx"
import {useRef} from "react"
import Modal from "./Modal.jsx"
import Heading from "./Heading.jsx"

export default function NewProject({onCancel, onSave}){
	const input = {
		title: useRef(),
		desc: useRef(),
		dueDate: useRef()
	}
	const modal = useRef()

	function handleSave(){
		const projectData = {
			title: input.title.current.value,
			desc: input.desc.current.value,
			dueDate: input.dueDate.current.value
		}
		//validation

		if(projectData.title.trim() === '' || projectData.desc.trim() === '' || projectData.dueDate.trim() === ''){
			modal.current.open()
			console.log("here")
			return
		}

		onSave(projectData)
	}

	return (
		<>
		<Modal ref={modal} buttonCaption="Okay">
			<Heading classes="mt-0 mb-[1.5rem]">Invalid Input</Heading>
			{/*<div>*/}
				<p>Oops.. looks like you forgot to enter a value</p>
				<p>Please make sure you enter all the values before hitting Save!</p> 
			{/*</div>*/}
		</Modal>
		<section className="w-[35rem] mt-16">
			<menu className="flex justify-end gap-4 items-center my-4">
				<li><button className="text-stone-600 hover:text-stone-950" onClick={onCancel}>Cancel</button></li>
				<li>
					<button onClick={handleSave} className="px-6 py-2 rounded-md text-stone-50 bg-stone-600 hover:bg-stone-950">
						Save
					</button>
				</li>
			</menu>
			<Input ref={input.title} label="Title" />
			<Input ref={input.desc} label="Description" textArea />
			<Input type="date" ref={input.dueDate} label="Due date" />
		</section>
		</>
	)
}