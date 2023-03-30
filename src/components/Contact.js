import { Link } from "react-router-dom"

export const Contact = () => {
  return (
    <div className="px-12 py-4 md:inline-flex md:p-16 xl:p-48">
      <div className="md:px-16">
        <p className="text-2xl font-bold tracking-wide leading-10 text-justify pb-4">Want to know more about me?</p> 
        <p className="tracking-wide leading-8 text-justify xl:text-lg">Do you have an exciting project that could use my help? {<br />}Send me an email or drop me a text on socials. {<br />}Let's start talking about our next collaboration!</p>
      </div>

      <div className="py-4 md:p-16 md:pt-0">
        <div className="py-4 md:pt-0">
          <p className="flex justify-center text-xl font-bold tracking-wide leading-8 text-justify md:justify-start">Email</p>
          <Link to={'mailto:jugin.muzhaqi7@gmail.com'} className="flex justify-center md:justify-start">jugin.muzhaqi7@gmail.com</Link> 
        </div>
        <div className="py-4">
          <p className="flex justify-center text-xl font-bold tracking-wide leading-8 text-justify md:justify-start">Social</p>
          <Link to={'https://www.facebook.com/jugin11'} target="_blank" rel="noreferrer" className="flex justify-center md:justify-start">Facebook - jugin11</Link>
          <Link to={'https://www.instagram.com/juginmuz/'} target="_blank" rel="noreferrer" className="flex justify-center md:justify-start">Instagram - juginmuz</Link>
        </div>
        <div className="py-4">
          <p className="flex justify-center text-xl font-bold tracking-wide leading-8 text-justify md:justify-start">Location</p>
          <p className="flex justify-center md:justify-start">London, UK</p>
        </div> 
      </div>
    </div> 
  )
}

export default Contact