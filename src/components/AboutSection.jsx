import groupImage from "../../assets/aboutsectionimage/groupimage.png";
import dotimage from "../../assets/aboutsectionimage/dots.png";
import shapeImage from "../../assets/aboutsectionimage/Vector.png"
import { FaCircleArrowRight } from "react-icons/fa6";

const AboutSection = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center gap-8 p-8">

      
    {/* Left Section */}
    <div className="md:w-1/2 space-y-4">
      <h6 className="text-[#FFA229] font-semibold">WELCOME TO REGISTERKARO.IN</h6>
      <h1 className="text-3xl font-bold text-[#272D37]">
        About <span className="text-[#FFA229]">Register Karo</span>
      </h1>
      <p className="text-[#272D37]">
        We have been using Intelegencia as our DevOps vendor for our field
        service applications over the last couple of years and I’m extremely
        pleased with their performance, ability to execute, and willingness to
        adapt in our ever-changing environment. Perry is an outstanding leader
        who is fanatical about customer satisfaction. He has built a solid team
        which has consistently delivered on projects thereby exceeding everyone’s
        expectations.
      </p>
      <p className="text-[#272D37]">
        I would strongly recommend their services to any organization that is
        looking for solid, reliable, and predictable outcomes.
      </p>
      <button className="bg-[#1C4670] flex items-center justify-center gap-2 text-white px-6 py-3 rounded-sm">
        Learn More <FaCircleArrowRight />
      </button>
    </div>
  
    {/* Right Section */}
    <div className="md:w-1/2 relative flex justify-center">
      {/* Group Image */}
      <img
        src={groupImage}
        alt="Group"
        className="relative z-10 rounded-lg shadow-lg"
      />
  
      {/* Dot Image */}
      <img
        src={dotimage}
        alt="Dots"
        className="absolute top-[320px] right-[20px] w-[100px] z-0"
      />
  
      {/* Shape Image */}
      <img
        src={shapeImage}
        alt="Shape"
        className="absolute bottom-[-20px] right-[-40px] w-[50px] z-0"
      />
    </div>

  </div>
  
  );
};

export default AboutSection;
