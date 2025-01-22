import privacy from "../../assets/WhySectionImages/Symbol (2).png";
import hiddenFee from "../../assets/WhySectionImages/Symbol (1).png";
import satisfaction from "../../assets/WhySectionImages/Symbol (4).png";
const WhySection = () => {
  return (
    <div>
      <div className="flex flex-col  md:flex-row items-center gap-4 m-8  ">
        <div className="flex flex-col gap-y-[130px] w-full md:w-1/2 ">
          <div>
            <h3 className="text-[#EB8D15]">WHY REGISTERKARO.IN</h3>
            <h1 className="text-2xl font-bold">Why Choose Register Karo</h1>
            <p>
              It is with consistent services and results that build trust with
              the people and that in turn help us to serve the business better.
            </p>
          </div>

          <div
            className=" w-[260px] -mt-14 md:mt-0   lg:w-[312px] lg:h-[215px] bg-[#EDF3FF] 
              border border-[#FCDDEC] flex items-center flex-col justify-center ml-14   md:ml-[10px] "
          >
            <img src={satisfaction} alt="" />
            <h1 className="text-xl  font-semibold">Confidential & Safe</h1>
            <p className="text-sm text-center ">
              All your private information is safe with us
            </p>
          </div>
        </div>



        <div className="grid grid-cols-1 ml-2 md:m-auto md:grid-cols-2 gap-6  ">
          <div
            className="   lg:w-[312px] lg:h-[215px] bg-[#FEF3EF] 
              border border-[#FCDDEC] flex items-center flex-col justify-center  "
          >
            <img src={privacy} alt="" />
            <h1 className="text-xl  font-semibold">Confidential & Safe</h1>
            <p className="text-sm text-center ">
              All your private information is safe with us
            </p>
          </div>
          <div className="lg:w-[312px] lg:h-[215px] flex items-center justify-center flex-col   bg-[#F1FBF3] border border-[#FCDDEC] ">
            <img src={hiddenFee} alt="" />
            <h1 className="text-xl  font-semibold">Confidential & Safe</h1>
            <p className="text-sm text-center">
              All your private information is safe with us
            </p>
          </div>
          <div className="lg:w-[312px] lg:h-[215px] flex items-center justify-center flex-col   bg-[#F1FBF3] border border-[#FCDDEC] ">
            <img src={hiddenFee} alt="" />
            <h1 className="text-xl  font-semibold">Confidential & Safe</h1>
            <p className="text-sm text-center">
              All your private information is safe with us
            </p>
          </div>
          <div className="lg:w-[312px] lg:h-[215px] flex items-center justify-center flex-col   bg-[#F1FBF3] border border-[#FCDDEC] ">
            <img src={hiddenFee} alt="" />
            <h1 className="text-xl  font-semibold">Confidential & Safe</h1>
            <p className="text-sm text-center">
              All your private information is safe with us
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySection;
