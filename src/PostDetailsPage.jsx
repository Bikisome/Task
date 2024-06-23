import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function PostDetailsPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch post details
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(data => setPost(data))
      .catch(error => console.error('Error fetching post:', error));

    // Fetch post comments
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then(
        response => response.json()
    )
      .then(
        data => setComments(data)
    )
      .catch(
        error => console.error('Error fetching comments:', error)
    );
  }, [id]);

  useEffect(() => {
    if (post) {
      // Fetch user details
      fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
        .then(response => response.json())
        .then(data => setUser(data))
        .catch(error => console.error('Error fetching user:', error));
    }
  }, [post]);


  if (!post || !user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Link to="/">Back to Home</Link>
<h1>{post.title}</h1>
<p>{post.body}</p>
<h3>Author: {user.name}</h3>
<h4>Email: {user.email}</h4>
<h2>Comments</h2>
    <div className="comments">
 {comments.map(comment => (
      <div key={comment.id} className="comment">
          <p><strong>{comment.name}</strong> ({comment.email}):</p>
            <p>{comment.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostDetailsPage;
