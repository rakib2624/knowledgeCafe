import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types"; // ES6
const Blogs = ({addBookmarksHandler, markAsReadHandler}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    }, [])
    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs: {blogs.length}</h1>
            {
                blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    addBookmarksHandler={addBookmarksHandler}
                    markAsReadHandler={markAsReadHandler}
                ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    addBookmarksHandler: PropTypes.func,
    markAsReadHandler: PropTypes.func
}

export default Blogs;