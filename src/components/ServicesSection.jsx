import companyFormation from "../../assets/serviceSectionicons/companyfoundation.png";
import companysecretarial from "../../assets/serviceSectionicons/companysecretarial.png";
import annualservices from "../../assets/serviceSectionicons/annualservices.png";
import bookkeeping from "../../assets/serviceSectionicons/bookkeeping.png";
import payroll from "../../assets/serviceSectionicons/payroll.png";
import virtualofficeaddress from "../../assets/serviceSectionicons/virtualofficeaddress.png";
import { FaArrowCircleRight } from "react-icons/fa";
const ServicesSection = () => {
  const Services = [
    {
      id: 1,
      image: companyFormation,
      title: "Company Formation",
      description:
        "Build web-based solutions that enhance customer experience.",
    },
    {
      id: 2,
      image: companysecretarial,
      title: "Company Secretarial Services",
      description:
        "Make data-driven decisions and utilize technology to reach business goals.",
    },
    {
      id: 3,
      image: virtualofficeaddress,
      title: "Virtual Office Address",
      description:
        "Build web-based solutions that enhance customer experience.",
    },
    {
      id: 4,
      image: annualservices,
      title: "Annual Compliance Services",
      description:
        "Turn your ideas into modern products with our design experts.",
    },
    {
      id: 5,
      image: payroll,
      title: "Payroll Services",
      description:
        "TExpand your business across the globe with minimal effort.",
    },
    {
      id: 6,
      image: bookkeeping,
      title: "Bookkeeping Services",
      description:
        "Steering user behaviours with creative design, data insights & technology.",
    },
  ];

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h6 className="text-[#EB8D15] font-semibold text-sm ">WELCOME TO REGISTERKARO.IN</h6>
        <h1 className="text-[#272D37] text-2xl font-bold  ">Explore Our Services</h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3">
        {Services.map((service) => (
          <div key={service.id} className="p-10 bg-white shadow-md rounded-lg">
            <img
              src={service.image}
              alt={service.title}
              className="w-24 h-24 mx-auto "
            />
            <h3 className="text-xs p-2 text-center md:text-xl font-bold ">{service.title}</h3>
            <p className="text-center">{service.description}</p>

            <button className="flex items-center gap-2 text-white bg-blue-950 p-2 rounded-md text-xs md:text-xl mx-auto">Learn more <FaArrowCircleRight /> </button>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button className="bg-[#1C4670] text-white flex items-center h-10 p-4 rounded-sm">See All Services</button>
      </div>
    </div>
  );
};

export default ServicesSection;
