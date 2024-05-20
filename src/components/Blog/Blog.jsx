import PropTypes from "prop-types"; // ES6
import { IoBookmarkOutline } from "react-icons/io5";
const Blog = ({ blog, addBookmarksHandler, markAsReadHandler}) => {
  // if (!blog) {
  //     return null;
  // }
  const { id, title, cover_img, author, author_img, reading_time, update_time, hashtag } = blog;
  return (
    <div className="space-y-4 mb-10">
      <img className="rounded-xl" src={cover_img}></img>
      <div className="md:flex justify-between items-center pt-5 pb-5">
        <div className="flex items-center">
          <img className="w-[60px] h-[60px] rounded-full" src={author_img}></img>
          <div className="ml-4">
            <h1 className="text-2xl">{author}</h1>
            <h6 className="text-sm">{update_time}</h6>
          </div>
        </div>
        <div>
          <span className="text-base">{reading_time} min read</span>
          <button className="ml-3" onClick={() => addBookmarksHandler(blog)}><IoBookmarkOutline ></IoBookmarkOutline></button>
        </div>
      </div>
      <h1 className="text-3xl">{title}</h1>
      <p>
        {hashtag.map((hash, idx) => <span key={idx}><a href="#">{hash}</a></span>)}
      </p>
      <button onClick={() => markAsReadHandler(id, reading_time)} className="text-purple-600 underline">Mark as read</button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object,
  addBookmarksHandler: PropTypes.func,
  markAsReadHandler: PropTypes.func
};

export default Blog;
