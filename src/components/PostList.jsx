import React from "react";
import { Link } from "react-router-dom";
import { BlogPosts } from "../data/blogPosts";

export default function PostList() {
  return (
    <ul>
      {Object.entries(BlogPosts).map(([slug, { title }]) => (
        <li key={slug} style={{ marginBottom: 8 }}>
          <Link to={`/posts/${slug}`}>
            <h3 style={{ display: "inline" }}>{title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
}
