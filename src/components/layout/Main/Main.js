// useBlogs hook to get blog list
// Main component should map through each item
// in blogs and create a <BlogCard> component for each blog item
import useBlogs from '../../../hooks/useBlogs';
import BlogCard from '../../BlogCard/BlogCard';

export default function Main() {
  const blogs = useBlogs();

  return (
    <main>
      {blogs.map((blog) => {
        <BlogCard key={blog.id} {...blog} />;
      })}
      ;
    </main>
  );
}
