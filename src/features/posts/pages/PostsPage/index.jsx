import { useState, useEffect } from "react";
import styles from "./postsPage.module.css";
import { getPosts } from "../../api/postsApi";
import PostList from "../../components/PostList";

function PostPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  function deletePost(id) {
    setPosts(posts.filter((post) => post.id !== id))
  }

  function updatePost(updatedPost) {
    setPosts(
        posts.map((post) => post.id === updatedPost.id ? updatedPost : post)
    )
  }

  const filteredPosts = posts.filter((post) => post.title.toLowerCase().includes(search.toLowerCase()))

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.heading}>Mini Blog Explorer</h1>

        <input
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.searchInput}
        />

        <PostList posts={filteredPosts} onDelete={deletePost} onUpdate={updatePost} />
      </div>
    </>
  );
}
export default PostPage;
