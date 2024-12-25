import Dashabout from "./About/Dashabout"
import Navbar from "./Dash/Navbar"

const About = () => {
  return (
    <div className="h-[100vh] bg-background shadow-sm shadow-[#00000031]">
      <Navbar/>
      <Dashabout/>
    </div>
  )
}

export default About