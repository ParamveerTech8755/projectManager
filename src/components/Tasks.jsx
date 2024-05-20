import {useState, useContext} from "react"
import Heading from "./Heading.jsx"
import Input from "./Input.jsx"
import { MdDelete } from "react-icons/md";
import {TaskContext} from "../store/TaskContext.jsx"

export default function Tasks(){

	const {tasks, onAddTask, onDeleteTask} = useContext(TaskContext)

	const [enteredTask, setEnteredTask] = useState('')

	function handleChange(event){
		setEnteredTask(event.target.value)
	}

	function handleTaskSubmit(){
		if(enteredTask.trim() !== ''){
			onAddTask(enteredTask.trim())
			setEnteredTask('')
		}
	}
	function handleDeleteTask(id){
		onDeleteTask(id)
	}

	return (
		<section>
			<Heading>Tasks</Heading>
			<div className="flex items-center gap-4 mt-4 mb-8">
				<input
				onFocus={(event) => {event.target.select()}}
				maxLength={50}
				value={enteredTask}
				onChange={handleChange}
				className="md:w-80 bg-stone-300 rounded-sm border-b-2 border-stone-400 text-stone-600 focus:border-stone-950 focus:outline-none text-stone-600" />
				<button className="bg-stone-700 text-stone-50 rounded-md px-3 py-1" onClick={handleTaskSubmit} >Add</button>
			</div>
			{tasks.length === 0
				?<p className="text-stone-600">This project does not have any tasks listed</p>
				:<ul className="style-none">
					{tasks.map(task => 
						<div key={task.id} className="bg-stone-200 rounded-md flex items-center justify-between my-1">
							<li className="py-1 px-2 text-stone-700">{task.text}</li>
							<button onClick={() => handleDeleteTask(task.id)} className="px-2">
								<MdDelete size="20px" />
							</button>
						</div>
						)}
				</ul>
			}
		</section>
	)
}