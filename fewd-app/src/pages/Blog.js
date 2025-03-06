import { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/posts") // ✅ Ensure the URL is correct
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  return (
    <Container className="mt-4">
      <h2>Latest Travel Stories</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </Container>
  );
};

export default Blog;
