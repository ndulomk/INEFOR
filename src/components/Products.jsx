import Navbar from "./Dash/Navbar"
import Dashprod from "./Products/Dashprod"
import Elements from "./Products/Elements"
import Item from "./Products/Item"
import Pricing from "./Products/Pricing"

const Products = () => {

  return (
    <div className="rounded-lg pb-4 shadow-sm shadow-[#00000033]">
      <Navbar/>
      <Dashprod/>
      <Elements/>
      <Pricing/>
      <Item/>
    </div>
  )
}

export default Products