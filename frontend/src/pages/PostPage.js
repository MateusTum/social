import React from "react";
import Header from "../components/Header";
import { useParams } from 'react-router-dom';
import Post from "../components/Post";

function PostPage() {
    
    const { postId } = useParams();

    return (
        <>
        <Header />
        <Post postId={postId} /> {/* Render the Post component as a function */}
        </>
    )
}

export default PostPage;