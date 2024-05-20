import Button from "./Button.jsx"

export default function ProjectsSidebar({onStartProject, projects, selectProject, selectedProjectId}){

	let hightlight

	return(
		<aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
		<h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
		<div>
			<Button onClick={onStartProject}>+ Add Projects</Button>
		</div>
		<ul className="style-none mt-8">
			{projects.map(project => {
				let cssClass = "w-full px-2 py-1 my-1 text-left rounded-md text-stone-400 hover:text-stone-50 hover:bg-stone-800 "
				if(selectedProjectId === project.id)
					cssClass += 'bg-stone-800'
			
			return (
				<li key={project.id}>
				<button
				onClick={() => selectProject(project.id)}
				className={cssClass}>
					{project.title}
				</button>
				</li>)
			})}
		</ul>
		</aside>
	)
}