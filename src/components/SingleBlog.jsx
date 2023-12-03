import { useLoaderData } from "react-router-dom";
import { FaUser, FaClock } from "react-icons/fa";
import SideBar from "./SideBar";

const SingleBlog = () => {
  const data = useLoaderData();
  const {
    title,
    image,
    category,
    author,
    published_date,
    reading_time,
    content,
  } = data[0];
  return (
    <div>
      <div className="px-4 py-44 bg-black text-white text-center">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          Blog Page
        </h1>
      </div>

      {/* blog details */}
      <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12">
        <div className="lg:w-3/4 mx-auto">
          <div>
            <img src={image} alt="" className="w-full mx-auto rounded" />
          </div>
          <h2 className="text-3xl font-bold mt-8 mb-4 text-blue-500 cursor-pointer">
            {title}
          </h2>
          <p className="mb-3 text-gray-600">
            <FaUser className="inline-flex items-center mr-2" />
            {author} | {published_date}
          </p>
          <p className="mb-3 text-gray-600">
            <FaClock className="inline-flex items-center mr-2" />
            {reading_time}
          </p>
          <p className="text-base text-gray-500 mb-6">{content}</p>
          <div className="text-base text-gray-500 mb-6">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
              incidunt facere ex voluptate. Ut voluptates eos expedita totam
              assumenda non necessitatibus deleniti! Eos ipsa mollitia unde, sed
              tempora voluptate quia!
            </p>
            <br />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
              incidunt facere ex voluptate. Ut voluptates eos expedita totam
              assumenda non necessitatibus deleniti! Eos ipsa mollitia unde, sed
              tempora voluptate quia!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
              incidunt facere ex voluptate. Ut voluptates eos expedita totam
              assumenda non necessitatibus deleniti! Eos ipsa mollitia unde, sed
              tempora voluptate quia!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
              incidunt facere ex voluptate. Ut voluptates eos expedita totam
              assumenda non necessitatibus deleniti! Eos ipsa mollitia unde, sed
              tempora voluptate quia!
            </p>
            <br />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
              incidunt facere ex voluptate. Ut voluptates eos expedita totam
              assumenda non necessitatibus deleniti! Eos ipsa mollitia unde, sed
              tempora voluptate quia!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
              incidunt facere ex voluptate. Ut voluptates eos expedita totam
              assumenda non necessitatibus deleniti! Eos ipsa mollitia unde, sed
              tempora voluptate quia!
            </p>
            <br />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
              incidunt facere ex voluptate. Ut voluptates eos expedita totam
              assumenda non necessitatibus deleniti! Eos ipsa mollitia unde, sed
              tempora voluptate quia!
            </p>
            <br />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
              incidunt facere ex voluptate. Ut voluptates eos expedita totam
              assumenda non necessitatibus deleniti! Eos ipsa mollitia unde, sed
              tempora voluptate quia!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
              incidunt facere ex voluptate. Ut voluptates eos expedita totam
              assumenda non necessitatibus deleniti! Eos ipsa mollitia unde, sed
              tempora voluptate quia!
            </p>
          </div>
        </div>
        <div className="lg:w-1/2">
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
