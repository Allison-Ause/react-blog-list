import useBlogs from '../../../hooks/useBlogs';
import BlogCard from '../../BlogCard/BlogCard';

export default function Main() {
  const blogs = useBlogs();

  return (
    <main>
      <div>
        {blogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
    </main>
  );
}
