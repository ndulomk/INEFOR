import { useSelector } from "react-redux"
import Dashbody from "../components/Dashbody"
import Sidebar from "../components/Sidebar"
import { useState } from "react"
import Products from "../components/Products"
import About from "../components/About"
import Modal from "../components/sidebar/Modal"

const Home = () => {
  const [state, setState] = useState("Home")
  const [showmodal, setShowModal] = useState(false)
  return (
    <div className="grid gap-4 p-4 grid-cols-[220px,_1fr] bg-sidebar text-text">
     {showmodal&& <Modal setOpenCommand={setShowModal}/>}
      <Sidebar commandOn={setShowModal} setState={setState}/>
      {state === "Home"&&<Dashbody/>}
      {state === "Products"&&<Products/>}
      {state === "About"&&<About/>}
      
    </div>
  )
}

export default Home