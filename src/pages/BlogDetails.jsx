import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../components/reusable_components/breadcrumbs';

function BlogDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/blog-posts.json')
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => String(p.id) === id);
        setPost(found);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="inner-page">
        <Breadcrumbs
          mainLink="/blogs"
          mainPage="Blogs"
          pageTitle="Loading..."
        />
        <section className="tf-section tf-blog pt60">
          <div className="container">
            <p>Loading...</p>
          </div>
        </section>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="inner-page">
        <Breadcrumbs
          mainLink="/blogs"
          mainPage="Blogs"
          pageTitle="Post not found"
        />
        <section className="tf-section tf-blog pt60">
          <div className="container">
            <h4>Post not found</h4>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="inner-page">
      <Breadcrumbs mainLink="/blogs" mainPage="Blogs" pageTitle={post.title} />
      <section className="tf-section tf-blog pt60">
        <div className="container">
          <div className="post-details">
            <h4 className="title">{post.title}</h4>
            <p className="date">{post.date}</p>
            {post.image && <img src={post.image} alt={post.title} />}
            <div className="content-post">
              {post.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogDetails;
