import PostCard from "../PostCard";
import styles from "./postList.module.css";

function PostList({ posts,onDelete,onUpdate }) {
  if (posts.length === 0) {
    return <p>No posts found!</p>;
  }
  return (
    <>
      <div className={styles.postsContainer}>
        {posts.map((post) => (
          <PostCard post={post} key={post.id} onDelete={onDelete} onUpdate={onUpdate}/>
        ))}
      </div>
    </>
  );
}

export default PostList;
