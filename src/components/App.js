import { useEffect, useState } from "react";
import { getPosts } from "../api";
import { Home } from "../pages";
import { Loader } from "./";
import Navbar from "./Navbar";

function App() {
  const [posts, setposts] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts();
      if (response.success) {
        setposts(response.data.posts);
      }
      setloading(false);
    };

    fetchPosts();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="App">
      <Navbar />
      <Home posts={posts} />
    </div>
  );
}

export default App;
