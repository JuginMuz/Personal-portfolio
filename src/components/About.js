import { MdComputer } from "react-icons/md"
import { IoLogoGameControllerB, IoMdFootball } from "react-icons/io"
import { GiCommercialAirplane, GiPizzaSlice } from "react-icons/gi" 

export const About = () => {
  return (
    <div>
      <div className="p-16 md:p-32 xl:p-48 xl:flex">
        <p className="pb-10 text-justify xl:pr-10 xl:text-lg xl:tracking-wide xl:leading-8 xl:indent-8">Hi, I'm Jugin Muzhaqi, a self-taught Web Developer based in London. {<br />}My journey as a developer started in February 2022. Since then, through Codecademy I learned the basics of web development, improved my knowledge and worked on several projects. {<br />}My goal is to use my skills and experience to make a positive impact on the web.</p>
        <div>
          <p className="text-justify xl:pl-10 xl:text-lg xl:tracking-wide xl:leading-8">In my freetime, I like to play videogames and keep myself in shape by working out or playing football. I also enjoy travelling and eating good food but mostly, learning to cook new recepices.</p>
          <div className="py-16 flex justify-center space-x-8 xl:pl-10">
            <MdComputer className="h-7 w-7"/> <IoLogoGameControllerB className="h-7 w-7"/> <IoMdFootball className="h-7 w-7"/> <GiPizzaSlice className="h-7 w-7"/> <GiCommercialAirplane className="h-7 w-7"/>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default About