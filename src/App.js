import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Posts from "./components/Posts";
import PostList from "./components/PostList";
import Post from "./components/Post";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />}>
          <Route index element={<PostList />} />
          <Route path=":slug" element={<Post />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route
          path="*"
          element={<div style={{ padding: 20 }}>404: Page Not Found</div>}
        />
      </Routes>
    </Layout>
  );
}
