import React from "react";

const Sample = ({ loadingPost, loadingUsers, post, users }) => {
  const PostInfo = (post) => (
    <div>
      <h3>{post.title}</h3>
      <h3>{post.body}</h3>
    </div>
  );

  const UsersInfo = (users) => (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.username} ({user.email})
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      <section>
        <h1>post</h1>
        {loadingPost && "loading...."}
        {!loadingPost && post && (
          <div>
            <h3>{post.title}</h3>
            <h3>{post.body}</h3>
          </div>
        )}
      </section>
      <hr></hr>
      <section>
        <h1>user</h1>
        {loadingUsers && "loading...."}
        {!loadingUsers && users && (
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.username} ({user.email})
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default Sample;
