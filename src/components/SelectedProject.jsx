import Tasks from "./Tasks.jsx"
import Button from "./Button.jsx"

export default function SelectedProject({tasks, project, onDelete, onDeleteTask, onAddTask}){

	const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	})

	return(
		<div className="w-[35rem] mt-16">
			<header className="border-b-2 border-stone-300">
				<div className="flex items-center justify-between">
					<h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
					<button className="text-stone-600 uppercase hover:text-stone-950" onClick={onDelete}>Delete</button>
				</div>
				<p className="mb-4 text-stone-400">{formattedDate}</p>
				<p className="text-stone-600 whitespace-pre-wrap">{project.desc}</p>
			</header>
			<Tasks />
		</div>
	)
}