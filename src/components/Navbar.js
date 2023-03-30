import { NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="flex justify-center xl:fixed xl:left-1/2 xl:-translate-x-1/2 xl:bottom-20">
      <div className="p-2 container w-80 flex items-center justify-between bg-gray-500 border rounded fixed bottom-3 xl:border-none xl:bg-black">
          <NavLink to={"/"} className="text-white/50 hover:text-white/100 xl:text-white/75 xl:hover:text-white/100 xl:hover:underline xl:underline-offset-4">Home</NavLink>
          <NavLink to={"/Projects"} className="text-white/50 hover:text-white/100 xl:text-white/75 xl:hover:text-white/100 xl:hover:underline xl:underline-offset-4">Projects</NavLink>
          <NavLink  to={"/About"} className="text-white/50 hover:text-white/100 xl:text-white/75 xl:hover:text-white/100 xl:hover:underline xl:underline-offset-4">About</NavLink>
          <NavLink to={"/Contact"} className="text-white/50 hover:text-white/100 xl:text-white/75 xl:hover:text-white/100 xl:hover:underline xl:underline-offset-4">Contact</NavLink>
      </div>
    </nav>
  )
}

export default Navbar