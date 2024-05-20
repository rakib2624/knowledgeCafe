import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
    const {title} =  bookmark;
    return (
        <div className='p-5 bg-white m-2 rounded-xl'>
            <h2 className='text-2xl'>{title}</h2>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark;