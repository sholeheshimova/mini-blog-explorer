import { useState } from "react";
import styles from "./postCard.module.css";
function PostCard({ post, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(post.title);
  const [editedBody, setEditedBody] = useState(post.body);

  function handleSave() {
    onUpdate({
      ...post,
      title: editedTitle,
      body: editedBody,
    });

    setIsEditing(false);
  }
  return (
    <>
      <div className={styles.postCard}>
        <span className={styles.postId}>Post #{post.id}</span>
        {isEditing ? (
          <>
            <input
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              className={styles.editInput}
            />

            <textarea
              value={editedBody}
              onChange={(e) => setEditedBody(e.target.value)}
              className={styles.editTextarea}
            />

            <button onClick={handleSave} className={styles.saveBtn}>Save</button>
          </>
        ) : (
          <>
            <h3 className={styles.postTitle}>{post.title}</h3>

            <p className={styles.postBody}>{post.body}</p>

            <button onClick={() => setIsEditing(true)} className={styles.editBtn}>Edit</button>
          </>
        )}

        <button className={styles.deleteBtn} onClick={() => onDelete(post.id)}>
          Delete
        </button>
      </div>
    </>
  );
}

export default PostCard;
