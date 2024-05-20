import noProjectImage from "../assets/no-projects.png"
import Button from "./Button.jsx"
import Heading from "./Heading.jsx"

export default function NoProjectSelected({onStartProject}){
	return (
		<section className="text-center w-2/3 md:mt-40">
		<img className="h-24 w-24 object-contain mx-auto" src={noProjectImage} alt="An empty task list image" />
		<Heading>No Project Selected</Heading>
		<p className="text-stone-500">Select a projector get started with a new one</p>
		<p className="mt-8 text-center px-16 text-stone-500">
			<Button classes="md:ml-[20rem]" onClick={onStartProject} >Create Project</Button>
		</p>
		</section>
	)
}