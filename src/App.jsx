import ProjectsSidebar from "./components/ProjectsSidebar.jsx"
import NewProject from "./components/NewProject.jsx"
import NoProjectSelected from "./components/NoProjectSelected.jsx"
import {useReducer} from "react"
import SelectedProject from "./components/SelectedProject.jsx"
import {TaskContext} from "./store/TaskContext.jsx"


function projectStateUpdater(state, action){
    switch(action.type){
    case 'ADD_PROJECT':
        return {
            ...state,
            selectedProjectId: null
        }
    case 'DELETE_PROJECT':
        return {
            ...state,
            selectedProjectId: undefined,
            projects: state.projects.filter(project => project.id !== state.selectedProjectId)
        }
    case 'CANCEL_ADD_PROJECT':
        return {
            ...state,
            selectedProjectId: undefined
        }
    case 'SUBMIT_PROJECT':
        return {
            ...state,
            selectedProjectId: action.payload.id,
            projects: [...state.projects, action.payload]
        }
    case 'SELECT_PROJECT':
        return{
            ...state,
            selectedProjectId: action.payload
        }
    case 'ADD_TASK':
        return {
            ...state,
            tasks: [...state.tasks, action.payload]
        }
    case 'DELETE_TASK':
        return{
            ...state,
            tasks: state.tasks.filter(task => task.id !== action.payload)
        }
    }
}

function App() {

    const [projectState, projectDispatch] = useReducer(projectStateUpdater, {
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
        projectDispatch({type: 'ADD_TASK', payload: newTask})
    }
    function handleDeleteTask(taskId){
        projectDispatch({type: 'DELETE_TASK', payload: taskId})
    }

  function handleStartProject(){
    projectDispatch({type:'ADD_PROJECT'})
  }

  function handleCancel(){
    projectDispatch({type: 'CANCEL_ADD_PROJECT'})
  }

  function handleSave(projectData){
    const newProject = {
        ...projectData,
        id: Math.floor(Math.random()*1000)
    }
    projectDispatch({type: 'SUBMIT_PROJECT', payload: newProject})
  }
  function onSelectProject(projectId){
    projectDispatch({type: 'SELECT_PROJECT', payload: projectId})
  }
  function handleDeleteProject(){
    projectDispatch({
        type: 'DELETE_PROJECT'
    })
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