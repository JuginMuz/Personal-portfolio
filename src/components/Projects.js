import movietomovies from "./../assests/movietomovies.PNG"
import todo from "./../assests/todo.PNG"
import portfolio from "./../assests/portfolio.PNG"

import { SiHtml5 } from "react-icons/si"
import { SiCss3 } from "react-icons/si"
import { SiJavascript } from "react-icons/si"
import { SiReact } from "react-icons/si"
import { SiRedux } from "react-icons/si"
import { SiTailwindcss } from "react-icons/si"

import { Link } from "react-router-dom"

export const Projects = () => {
  return (
     <div className="pb-16 xl:px-32">
      <div className="p-12 flex justify-center space-x-8">
        <SiHtml5 className="h-8 w-8"/> <SiCss3 className="h-8 w-8"/> <SiTailwindcss className="h-8 w-8"/> <SiJavascript className="h-8 w-8"/> <SiReact className="h-8 w-8"/> <SiRedux className="h-8 w-8"/>
      </div>
      <div className="grid grid-cols-1 grid-rows-3 gap-10 justify-items-center xl:flex xl:justify-evenly">
          <div className="box-border grid h-96 w-96 rounded border xl:bg-zinc-100 xl:text-black">
            <Link to={'https://github.com/JuginMuz/Personal-portfolio'} target="_blank">
              <img src={portfolio} alt="img" className="p-2 w-96 h-48 rounded-lg"/>
            </Link>
            <h3 className="text-center text-lg font-semibold">Portfolio Website</h3>
            <p className="px-6 text-justify">Built via React and styled with Tailwind CSS, this application is my "business card".</p>
            <p className="px-6 text-justify">React - React Router - Tailwind CSS</p>
          </div>
          <div className="box-border grid h-96 w-96 rounded border xl:bg-zinc-100 xl:text-black">
          <Link to={'https://github.com/JuginMuz/Movietomovies-API'} target="_blank">
              <img src={movietomovies} alt="img" className="p-2 w-96 h-48 rounded-lg"/>
            </Link>
            <h3 className="text-center text-lg font-semibold">Movietomovies</h3>
            <p className="px-6 text-justify">This app allows the user to search for movies via an API and render the results to them.</p>
            <p className="px-6 text-justify">React - React Hooks - API - CSS</p>
          </div>
          <div className="box-border grid h-96 w-96 rounded border xl:bg-zinc-100 xl:text-black">
          <Link to={'https://github.com/JuginMuz/Todo-List'} target="_blank">
            <img src={todo} alt="img" className="p-2 w-96 h-48 rounded-lg"/>
          </Link>
            <h3 className="text-center text-lg font-semibold">To Do List</h3>
            <p className="px-6 text-justify">This app allows the user to add, edit, mark and delete tasks to a list of to-do items.</p>
            <p className="px-6 text-justify">React - React Hooks - CSS</p>
          </div>
      </div>
  </div> 
  )
}

export default Projects