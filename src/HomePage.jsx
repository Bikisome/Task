import React from 'react';
import {  useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(
        response => response.json()
  )
     .then(
      data => setPosts(data)
    )

      .catch(error => console.error('error posts:', error)); 
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(
        response => response.json()
      )
      .then(
        data => setUsers(data)
      
      )
      .catch(
        error => console.error('erroe users:', error)
      );
  }, []);

  const getUserName = (userId) => {
    const user =  users.find(user => user.id === userId);

    return user ? user.name : 'Unknown User';// if thr user found then update the user name otherwise return n

    
  };

  return (
    <div>
      <h1>Posts</h1>
      <div className="posts">
    {posts.map(post => (
       <div key={post.id} className="post">
      <Link to={`/post/${post.id}`}>
          <h2>{post.title}</h2>
        </Link>
       <p>{post.body}</p>
        <p><strong>Author:</strong> {getUserName(post.userId)}</p>
         </div>
        ))}
      </div>
    </div>
  );
}
export default HomePage;


