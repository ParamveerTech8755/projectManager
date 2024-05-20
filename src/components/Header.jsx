import { CiLight } from "react-icons/ci";
import { MdNightlight } from "react-icons/md";
import {useState} from "react"

export default function Header(){
	const [theme, setTheme] = useState('light')

	function toggleTheme(){
		setTheme(state => {
			if(state === 'dark'){
				document.documentElement.setAttribute('data-theme', "light")
				return 'light'
			}
			else if(state === 'light'){
				document.documentElement.setAttribute("data-theme", "dark")
				return 'dark'
			}
		})
	}

	return(
		<header id="page-header">
			<div>
			    <h2>Projecto</h2>
			    <p><span>Projects To-Do List</span></p>
			</div>
			<button className="mr-1 md:mr-20 h-8 w-8 " onClick={toggleTheme} >
				{theme === 'dark' ? <CiLight size="30px" /> : <MdNightlight size="30px" />}
			</button>
	    </header>
	)
}