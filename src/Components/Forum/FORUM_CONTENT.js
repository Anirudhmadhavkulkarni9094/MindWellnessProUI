import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ForumContent() {
    const [blogs, setBlogs] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [newBlog, setNewBlog] = useState({ title: '', content: '', name: '', category: localStorage.getItem("category"), author: '' });
    const [selectedBlogId, setSelectedBlogId] = useState(null);
    const [AddBlog , setAddBlog] = useState(false);

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const response = await axios.get(`https://mindwellnesspro.onrender.com/blog-posts/${localStorage.getItem("category")}`);
            setBlogs(response.data);
        } catch (error) {
            console.error('Error fetching blogs:', error);
        }
    };

    const handleAddComment = async (blogId) => {
        try {
            await axios.post(`https://mindwellnesspro.onrender.com/blog-posts/${blogId}/comment`, { text: newComment });
            fetchBlogs();
            setNewComment('');
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };

    const handleAddBlog = async () => {
        try {
            await axios.post('https://mindwellnesspro.onrender.com/blog-posts', newBlog);
            fetchBlogs();
        } catch (error) {
            console.error('Error adding blog:', error);
        }
    };

    return (
        <>
        <Link to="/Forum" className='mx-10 font-bold'> &#x2190; Go back</Link>
        <div className="max-w-4xl mx-auto p-6">
            <button className="text-xl flex gap-5 items-center font-bold text-gray-500 mb-4" onClick={()=>setAddBlog(!AddBlog)}>Share your thoughts now! <img src={AddBlog ? require("../Assets/collapse.png") : require("../Assets/add.png")} className='w-5' alt=''></img> </button>
            {AddBlog && <div className="mb-4">
                <input
                    className="w-full rounded p-2 my-2 border"
                    type="text"
                    value={newBlog.title}
                    onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
                    placeholder="Enter Blog Title"
                    />
                <input
                    className="w-full rounded p-2 border"
                    type="text"
                    value={newBlog.author}
                    onChange={(e) => setNewBlog({ ...newBlog, author: e.target.value })}
                    placeholder="Enter Author Name"
                    />
                <textarea
                    className="w-full rounded p-2 border mt-2 h-56"
                    value={newBlog.content}
                    onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
                    placeholder="Enter Blog Content"
                    ></textarea>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
                    onClick={handleAddBlog}
                >
                    Add Blog
                </button>
            </div>}

            {blogs.map(blog => (
                <div key={blog._id} className="bg-gray-100 p-4 rounded shadow mb-4">
                <h1 className="text-xl mb-2 font-bold">{blog.title.toUpperCase()}</h1>
                <p className='mb-5'>{blog.content}</p>
                <hr className='h-4'></hr>
                <h1 onClick={() => setSelectedBlogId(selectedBlogId === blog._id ? null : blog._id)} className='flex gap-2 items-center mt-5 font-bold text-gray-700'>
                    {selectedBlogId === blog._id ? 'Hide Comments' : 'Show Comments'} 
                    <img src={selectedBlogId === blog._id ? require("../Assets/up.png") : require("../Assets/down.png")} className='w-5' alt=''></img>
                </h1>
                {selectedBlogId === blog._id &&
                    <div className="mt-2">
                        {/* Your comment input and display logic */}
                        <input
                            className="w-full rounded p-2 border"
                            type="text"
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            placeholder="Add a Comment"
                            />
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mt-2"
                            onClick={() => handleAddComment(blog._id)}
                            >
                            Add Comment
                        </button>
                    </div>
                }
                {/* Display comments only when selectedBlogId matches */}
                {selectedBlogId === blog._id &&
                    <div className="mt-4">
                        {blog.comments.map(comment => (
                            
                                <div key={comment._id} className="bg-gray-200 p-2 rounded mb-2">
                                        <p className='text-md'>{comment.text}</p>
                                        <div className='flex justify-between text-sm text-gray-600'>
                                        <p>{new Date(comment.date).toLocaleString().slice(0, 10)}</p>
                                        
                                        <p>{new Date(comment.date).toLocaleString().slice(11)}</p>
                                        </div>
                                    </div>
                        ))}
                    </div>
                }
            </div>
        ))}
        </div>
        </>
    );
}

export default ForumContent;
