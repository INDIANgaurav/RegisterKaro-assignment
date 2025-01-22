 
import Companies from "../../assets/Pagination.png"
import footerImage from "../../assets/Group 1261153015.png"
const HappyCLientsSection = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      
      <h1 className="text-2xl font-bold">Our Happy Clients</h1>
      <p className="  md:w-[800px] text-center ">Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p>

      <img src={Companies} className="mt-10" alt="" />
      <img src={footerImage} className="w-full" alt="" />
    </div>
  )
}

export default HappyCLientsSection
