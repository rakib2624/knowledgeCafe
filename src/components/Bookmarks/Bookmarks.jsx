import PropTypes from "prop-types"; // ES6
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime}) => {
  return (
    <div className="flex flex-col">
      <div  className='md:1/3 text-3xl ml-5 p-5 bg-gray-200 mb-5 rounded-xl text-purple-700'>
        <h4>Spent time on read: {readingTime} min</h4>
      </div>
      <div className="md:1/3 text-3xl ml-5 p-5 bg-gray-200 rounded-xl">
        
        <h2>Bookmarked blogs: {bookmarks.length}</h2>
        {
          bookmarks.map((bookmark, idx) => <Bookmark
            key={idx}
            bookmark={bookmark}
          ></Bookmark>)
        }
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number
};

export default Bookmarks;
