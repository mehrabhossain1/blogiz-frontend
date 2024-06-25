import LatestBlogs from "@/components/LatestBlogs/LatestBlogs";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/api/v1/blogs", {
    //  It'll revalidate the blogs data in every 30 seconds (ISR)
    next: {
      revalidate: 30,
    },
  });
  const blogs = await res.json();
  // console.log(blogs);

  return (
    <>
      <LatestBlogs blogs={blogs} />
    </>
  );
};

export default HomePage;
