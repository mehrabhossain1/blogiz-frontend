import LoadingCard from "@/components/ui/LoadingCard";
import { IBlog } from "@/types";

const BlogsLoadingPage = async () => {
  const res = await fetch("http://localhost:5000/api/v1/blogs");
  const blogs = await res.json();

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {blogs.map((blog: IBlog) => (
          <LoadingCard key={blog.id} />
        ))}
      </div>
    </div>
  );
};

export default BlogsLoadingPage;
