import { CiStar } from "react-icons/ci";
import { MdStars } from "react-icons/md";
import ratingimage from "../../assets/ratingsimage.png";
import rightLogo from "../../assets/rightimage.png";
// import companyLogo from "../../assets/Logos.png";
import backgroundimage from "../../assets/__before.png";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import ServicesSection from "./ServicesSection";
import AboutSection from "./AboutSection";
import WhySection from "./WhySection";
import HappyCLientsSection from "./HappyCLientsSection";
import RatingSection from "./RatingSection";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="w-full">
      {/* Content Section with Background Image */}
      <div
        className="relative w-full px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundimage})` }}
      >
        {/* Left Section */}
        <div className="space-y-6">
          {/* Google Rating */}
          <div className="flex items-center gap-2 text-gray-800">
            <CiStar className="text-yellow-500 text-2xl" />
            <span>Google Rating</span>
            <div className="flex items-center gap-1">
              <MdStars className="text-yellow-500" />
              <MdStars className="text-yellow-500" />
              <MdStars className="text-yellow-500" />
              <MdStars className="text-yellow-500" />
              <MdStars className="text-yellow-500" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold text-gray-800 leading-snug">
            Your trusted partner for compliance business needs
          </h1>
          <div className="w-16 h-1 bg-red-500"></div>

          {/* Description */}
          <p className="text-gray-600">
            An online business compliance platform that helps entrepreneurs and
            other individuals with various
            <span className="font-semibold"> registrations</span>,
            <span className="font-semibold"> tax filings</span>, and other
            <span className="font-semibold"> legal matters</span>.
          </p>

          {/* Rating Image */}
          <div>
            <img src={ratingimage} alt="Ratings" className="w-auto h-auto" />
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600">
              Talk An Expert
            </button>
            <button className="flex items-center gap-2 text-red-600 border border-red-600 px-6 py-3 rounded hover:bg-red-100">
              <TiSocialYoutubeCircular className="text-xl" /> See how it works
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center items-center">
          <img
            src={rightLogo}
            alt="Right Section Logo"
            className="w-full max-w-md"
          />
        </div>
      </div>

      {/* Company Logo Section */}
      <div className="w-auto px-8 py-12 bg-white text-center">
        <h1 className="text-lg font-bold text-gray-800 mb-4">
          Trusted By Over 100+ Startups and Freelance Businesses
        </h1>
        {/* <img
          src={companyLogo}
          alt="Company Logos"
          className="mx-auto w-full    max-w-4xl"
        /> */}
      </div>

      <ServicesSection />

      <AboutSection />

      <WhySection />

      <HappyCLientsSection />

      <RatingSection/>

      <Footer/>
    </div>
  );
};

export default Home;
