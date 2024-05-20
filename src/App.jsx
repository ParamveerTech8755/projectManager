import ProjectsSidebar from "./components/ProjectsSidebar.jsx"
import NewProject from "./components/NewProject.jsx"
import NoProjectSelected from "./components/NoProjectSelected.jsx"
import {useState} from "react"
import SelectedProject from "./components/SelectedProject.jsx"
import {TaskContext} from "./store/TaskContext.jsx"

function App() {

  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  })


    function handleAddTask(text){
        const newTask = {
            text,
            id: Math.floor(Math.random()*1000),
            projectId: projectState.selectedProjectId
        }
        setProjectState(prevState => ({
            ...prevState,
            tasks:[...prevState.tasks, newTask]

        }))
    }
    function handleDeleteTask(taskId){
        setProjectState(prevState => ({
            ...prevState,
            tasks: prevState.tasks.filter(task => task.id !== taskId)
        }))
    }

  function handleStartProject(){
    setProjectState(prevState => ({
      ...prevState,
      selectedProjectId: null
    }))
  }

  function handleCancel(){
    setProjectState(prevState => ({
      ...prevState,
      selectedProjectId: undefined
    }))
  }

  function handleSave(projectData){
    const newProject = {
        ...projectData,
        id: Math.floor(Math.random()*1000)
    }
    setProjectState(prevState => ({
        ...prevState,
        selectedProjectId: undefined,
        projects:[...prevState.projects, newProject]

    }))
  }
  function onSelectProject(projectId){
    setProjectState(prevState => ({
        ...prevState,
        selectedProjectId: projectId
    }))
  }
  function handleDeleteProject(){
    setProjectState(prevState => ({
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(project => project.id !== prevState.selectedProjectId)
    }))
  }

  let content
    if(projectState.selectedProjectId === null)
        content = <NewProject onCancel={handleCancel} onSave={handleSave} />
    else if(projectState.selectedProjectId === undefined)
        content = <NoProjectSelected onStartProject={handleStartProject} />
    else{
        const project = projectState.projects.find(project => project.id === projectState.selectedProjectId)
        const selectedProjectTasks = projectState.tasks.filter(task => task.projectId === projectState.selectedProjectId)
        const taskContext = {
            tasks: selectedProjectTasks,
            onAddTask: handleAddTask,
            onDeleteTask: handleDeleteTask
        }
        content = <TaskContext.Provider value={taskContext}>
                <SelectedProject project={project} onDelete={handleDeleteProject} />
            </TaskContext.Provider>
    }

  return (
    <main className="h-screen my-8 flex gap-8 bg-stone-50">
    <ProjectsSidebar selectedProjectId={projectState.selectedProjectId} onStartProject={handleStartProject} projects={projectState.projects} selectProject={onSelectProject} />
        {content}
    </main>
  )
}

export default App