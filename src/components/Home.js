import profile from "./../assests/profile.jfif"

import { FaGithub, FaLinkedin } from "react-icons/fa"
import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <div className="p-5 flex flex-wrap justify-center xl:p-32">
        <img src={profile} alt="img" className="w-80 rounded-full h-auto align-middle border-2 border-white"/>
        <div className="p-12 text-left">
            <p className="text-2xl">Hi there, I'm</p>
            <h1 className="pb-5 text-7xl">Jugin Muzhaqi</h1>
            <h3 className="text-3xl">Web Developer / Programmer</h3>
            <hr className="h-0.5 my-4 border-0 bg-gray-100"></hr>
            <div className="flex justify-end space-x-4">
                <Link to={'https://github.com/JuginMuz'} target="_blank">
                    <FaGithub className="h-6 w-6 text-white/75 hover:text-white/100"/>
                </Link> 
                <Link to={'https://www.linkedin.com/in/jugin-muzhaqi-a1312219a/'} target="_blank">
                    <FaLinkedin className="h-6 w-6 text-white/75 hover:text-white/100"/>
                </Link> 
            </div>
        </div>
    </div> 
  )
}

export default Home