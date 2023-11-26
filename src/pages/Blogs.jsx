import BlogPage from "../components/BlogPage";

const Blogs = () => {
  return (
    <div>
      <div className="px-4 py-44 bg-black text-white text-center">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          Blogs
        </h1>
      </div>

      {/* all blogs */}
      <div className="max-w-7xl mx-auto">
        <BlogPage />
      </div>
    </div>
  );
};

export default Blogs;
