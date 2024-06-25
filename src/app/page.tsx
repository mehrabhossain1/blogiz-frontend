import LatestBlogs from "@/components/LatestBlogs/LatestBlogs";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/api/v1/blogs");
  const blogs = await res.json();
  // console.log(blogs);

  return (
    <>
      <LatestBlogs blogs={blogs} />
    </>
  );
};

export default HomePage;
