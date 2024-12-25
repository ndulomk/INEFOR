import Navbar from "./Dash/Navbar"
import Dashprod from "./Products/Dashprod"
import Elements from "./Products/Elements"

const Products = () => {
  return (
    <div className="rounded-lg pb-4 shadow-sm shadow-[#00000033]">
      <Navbar/>
      <Dashprod/>
      <Elements/>
    </div>
  )
}

export default Products