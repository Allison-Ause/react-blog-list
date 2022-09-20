import { useState, useEffect } from 'react';
import { getBlogs } from '../services/blogs';

export default function useBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getBlogs();
      setBlogs(data);
    }
    fetchData();
  }, []);
  return blogs;
}
