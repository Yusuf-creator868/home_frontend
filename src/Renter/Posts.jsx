import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Userhomes from "./Userhomes";
import { apiurl } from "../api";



function Posts() {

    const [posts, setPosts] = useState([]);


    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await apiurl.get("userhomes/", { withCredentials: true });
                setPosts(res.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchPosts();
    }, [])



    return (
        <div className="flex flex-col justify-center items-center">
            <h2>My Posts</h2>
            {posts.length === 0 && <p>No posts yet.</p>}

            {posts.map(post => (
                <Userhomes id={post.id} posts={post} />
            ))}

            <Link to="/profile/addpost" className="my-30 px-10 cursor-pointer border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition-colors duration-200 rounded-md">Add Post</Link>
        </div>
    )
}

export default Posts