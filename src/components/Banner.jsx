import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="px-4 py-32 bg-black mx-auto">
      <div className="text-white text-center">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          Welcome to our blog
        </h1>
        <p className="text-gray-100 lg:w-3/5 mx-auto mb-5 font-inter">
          Start your blog today & join a community of writers & readers who are
          passionate about sharing their journies & ideas. We offer everything
          you need to get started, from helpful tips & tutorials.
        </p>
        <div>
          <Link
            to="/"
            className="inline-flex items-center font-medium py-1 hover:text-orange-400"
          >
            Learn more
            <FaArrowRight className="mt-1 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
